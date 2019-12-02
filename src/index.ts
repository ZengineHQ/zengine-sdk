import { ZengineContextData } from './zengine.types'
import Client from '@zenginehq/post-rpc-client'
import { PostRPCClient } from './external.types'

export const rpcClient: PostRPCClient = new Client(document.location.ancestorOrigins[0])

rpcClient.logging(false)
rpcClient.start()

/**
 * Get Context Data from Zengine Admin state
 */
export function znContext (callback?: (context: ZengineContextData) => void): Promise<ZengineContextData> | null {
  return callback
    ? rpcClient.call({ method: 'context', callback })
    : rpcClient.call({ method: 'context' })
}

/**
 * Displays a confirmation dialog with your message and two buttons: Yes and Close
 * Sends a boolean to your promise or callback representing the user's selection
 */
export function znConfirm (message: string, callback?: () => boolean): Promise<boolean> | null {
  return callback
    ? rpcClient.call({ method: 'confirm', args: { message }, callback })
    : rpcClient.call({ method: 'confirm', args: { message } })
}

/**
 * Displays a temporary alert message at the top of the page
 */
export function znMessage (message: string, type: 'info' | 'saved' | 'warning' | 'error' = 'info', duration: number = 4000): Promise<undefined> {
  return rpcClient.call({
    method: 'message',
    args: { params: { message, type, duration } }
  })
}
