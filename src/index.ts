import { ZengineContextData } from './zengine.types'
import Client from '@zenginehq/post-rpc-client'
import { PostRPCClient } from './external.types'
import { ZengineContextData, ZengineFilter, ZengineFiltersPanelOptions } from './zengine.types'

export const rpcClient: PostRPCClient = new Client(document.location.ancestorOrigins[0])

rpcClient.logging(false)
rpcClient.start()

/**
 * Get Context Data from Zengine Admin state
 */
export function znContext (callback: (err: Error, context: ZengineContextData) => void): null
export function znContext (): Promise<ZengineContextData>

export function znContext (callback?: (err: Error, context: ZengineContextData) => void): Promise<ZengineContextData> | null {
  return rpcClient.call({ method: 'context', callback })
}

/**
 * Displays a confirmation dialog with your message and two buttons: Yes and Close
 * Sends a boolean to your promise or callback representing the user's selection
 */
export function znConfirm (message: string, callback: (err: Error, confirmed: boolean) => void): null
export function znConfirm (message: string): Promise<boolean>

export function znConfirm (message: string, callback?: (err: Error, confirmed: boolean) => void): Promise<boolean> | null {
  return rpcClient.call({ method: 'confirm', args: { message }, callback })
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

/**
 * Displays a modal that allows the user to view and build a data filter.
 */
export function znFiltersPanel (options: ZengineFiltersPanelOptions, callback: (err: Error, filter: ZengineFilter) => void): null
export function znFiltersPanel (options: ZengineFiltersPanelOptions): Promise<ZengineFilter>

export function znFiltersPanel (options: ZengineFiltersPanelOptions, callback?: (err: Error, filter: ZengineFilter) => void): Promise<ZengineFilter> | null {
  return callback
    ? rpcClient.call({ method: 'filtersPanel', args: { options }, callback })
    : rpcClient.call({ method: 'filtersPanel', args: { options } })
}

