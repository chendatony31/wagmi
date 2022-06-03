import { CallOverrides } from 'ethers/lib/ethers'
import { Result } from 'ethers/lib/utils'

import { getProvider } from '../providers'
import { getContract } from './getContract'
import { multicallInterface } from '../../constants'
import { ReadContractConfig } from './readContract'
import { ChainDoesNotSupportMulticallError } from '../../errors'

export type MulticallConfig = {
  /** Failures in the multicall will fail silently */
  allowFailure?: boolean
  /** Chain id to use for provider */
  chainId?: number
  contracts: {
    addressOrName: ReadContractConfig['addressOrName']
    args?: ReadContractConfig['args']
    contractInterface: ReadContractConfig['contractInterface']
    functionName: ReadContractConfig['functionName']
  }[]
  /** Call overrides */
  overrides?: CallOverrides
}
export type MulticallResult<Data extends any[] = Result[]> = Data

type AggregateResult = {
  success: boolean
  returnData: string
}[]

export async function multicall<Data extends any[] = Result[]>({
  allowFailure = true,
  chainId,
  contracts,
  overrides,
}: MulticallConfig): Promise<MulticallResult<Data>> {
  const provider = getProvider({ chainId })
  const chain =
    provider.chains.find((chain) => chain.id === chainId) || provider.chains[0]
  if (!chain?.multicall)
    throw new ChainDoesNotSupportMulticallError(
      `Chain "${chain.name}" does not support multicall.`,
    )

  if (
    typeof overrides?.blockTag === 'number' &&
    overrides?.blockTag < chain.multicall.blockCreated
  )
    throw new ChainDoesNotSupportMulticallError(
      `Chain "${chain.name}" does not support multicall on block ${overrides.blockTag}`,
    )

  const multicallContract = getContract({
    addressOrName: chain.multicall.address,
    contractInterface: multicallInterface,
    signerOrProvider: provider,
  })
  const calls = contracts.map(
    ({ addressOrName, contractInterface, functionName, ...config }) => {
      const { args } = config || {}
      const contract = getContract({
        addressOrName,
        contractInterface,
      })
      const params = Array.isArray(args) ? args : args ? [args] : []
      const callData = contract.interface.encodeFunctionData(
        functionName,
        params,
      )
      if (!contract[functionName])
        console.warn(
          `"${functionName}" is not in the interface for contract "${addressOrName}"`,
        )
      return {
        target: addressOrName,
        allowFailure: allowFailure,
        callData,
      }
    },
  )
  const params = [...[calls], ...(overrides ? [overrides] : [])]
  const results = (await multicallContract.aggregate3(
    ...params,
  )) as AggregateResult
  return results.map(({ returnData, success }, i) => {
    if (!success) return undefined
    const { addressOrName, contractInterface, functionName } = contracts[i]
    const contract = getContract({
      addressOrName,
      contractInterface,
    })
    const result = contract.interface.decodeFunctionResult(
      functionName,
      returnData,
    )
    return Array.isArray(result) && result.length === 1 ? result[0] : result
  }) as Data
}