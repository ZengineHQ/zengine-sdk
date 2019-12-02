export interface PostRPCClient {
  running: boolean
  timer?: undefined
  listener?: () => void
  name: 'PostRPC.Client'
  origin: string
  id: number
  queue: {
    method: string,
    args: any,
    timeout: number,
    callback: () => void | null,
    id: number,
    sent: number,
    resolve: () => void | null,
    reject: () => void | null
  }[]
  subscribed: { [key: string]: { callback: () => void } }
  _logging: boolean

  parent (): Window

  subscribe (event: string, callback: (item: any) => void): boolean

  unsubscribe (event: string): boolean

  nextID (): number

  start (): void

  stop (): void

  request (method: string, args: any, id: number): PostRPCRequest

  timeoutResponse (id: number): { jsonrpc: string, id: number, error: { code: number, message: string, data: string } }

  internalErrorResponse (id: number): { jsonrpc: string, id: number, error: { code: number, message: string, data: string } }

  call (details: {
    method: string
    args?: any | any[]
    callback?: (...args: any[]) => void
    timeout?: number
  }): Promise<any> | null

  timeoutHandler (): void

  post (targetWindow: Window, message: PostRPCRequest, origin: string): void

  response (response: any): void

  messageHandler (event: MessageEvent): void

  logging (enabled: boolean): void

  log (messages: any[], collapse?: boolean, color?: 'green'): void

  logGroup (group: string, messages: any[], color?: 'green'): void
}

type PostRPCRequest = {
  jsonrpc: string
  method: string
  args: any
  id: number
}
