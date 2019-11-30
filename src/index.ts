import Client from '@zenginehq/post-rpc-client'

export const rpcClient = new Client(document.location.ancestorOrigins[0])

rpcClient.logging(false)
rpcClient.start()

/**
 * Get Context Data from Zengine Admin state
 */
export function getContext (callback: (context: any) => void): null
export function getContext (): Promise<any>

export function getContext (callback?: (context: any) => void): Promise<any> | null {
  return rpcClient.call({ method: 'context', callback })
}
