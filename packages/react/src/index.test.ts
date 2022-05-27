import * as Exports from './'

it('should expose correct exports', () => {
  expect(Object.keys(Exports)).toMatchInlineSnapshot(`
    [
      "Context",
      "WagmiProvider",
      "WagmiConfig",
      "createClient",
      "useClient",
      "useAccount",
      "useBalance",
      "useBlockNumber",
      "useConnect",
      "useContract",
      "useContractEvent",
      "useContractRead",
      "useContractWrite",
      "useDisconnect",
      "useEnsAddress",
      "useEnsAvatar",
      "useEnsName",
      "useEnsResolver",
      "useFeeData",
      "useNetwork",
      "useProvider",
      "useQuery",
      "useSendTransaction",
      "useSignMessage",
      "useSignTypedData",
      "useSigner",
      "useToken",
      "useWaitForTransaction",
      "useWebSocketProvider",
      "deserialize",
      "serialize",
      "Client",
      "Connector",
      "alchemyRpcUrls",
      "allChains",
      "chain",
      "chainId",
      "configureChains",
      "createStorage",
      "defaultChains",
      "defaultL2Chains",
      "erc20ABI",
      "erc721ABI",
      "etherscanBlockExplorers",
      "infuraRpcUrls",
      "readContracts",
      "AddChainError",
      "ChainNotConfiguredError",
      "ConnectorAlreadyConnectedError",
      "ConnectorNotFoundError",
      "ProviderRpcError",
      "ResourceUnavailableError",
      "RpcError",
      "SwitchChainError",
      "SwitchChainNotSupportedError",
      "UserRejectedRequestError",
    ]
  `)
})

it('should alias "WagmiConfig" as "WagmiProvider"', () => {
  expect(Exports.WagmiConfig).toBe(Exports.WagmiProvider)
})
