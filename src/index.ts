import { ZengineContextData } from './zengine.types'
import Client from '@zenginehq/post-rpc-client'
import { PostRPCClient } from './external.types'

export const rpcClient: PostRPCClient = new Client(document.location.ancestorOrigins[0])

rpcClient.logging(false)
rpcClient.start()

/**
 * Get Context Data from Zengine Admin state
 */
export function getContext (callback: (context: ZengineContextData) => void): null
export function getContext (): Promise<ZengineContextData>

export function getContext (callback?: (context: ZengineContextData) => void): Promise<ZengineContextData> | null {
  return rpcClient.call({ method: 'context', callback })
}
