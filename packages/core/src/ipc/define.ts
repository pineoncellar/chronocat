import { invoke } from './invoke'

type QQNTApi<ReturnType, Args extends unknown[]> = (
  ...args: Args
) => Promise<ReturnType>

export function defineApi<ReturnType = undefined, Args extends unknown[] = []>(
  channel: 'IPC_UP_2' | 'IPC_UP_3' | 'IPC_UP_1',
  clazz: string,
  apiName: string,
): QQNTApi<ReturnType, Args> {
  return (...args: Args) =>
    invoke(channel, clazz, apiName, ...args) as Promise<ReturnType>
}
