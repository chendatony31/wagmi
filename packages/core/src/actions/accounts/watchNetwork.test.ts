import { setupClient } from '../../../test'
import { connect } from './connect'
import { GetNetworkResult } from './getNetwork'
import { switchNetwork } from './switchNetwork'
import { watchNetwork } from './watchNetwork'

describe('watchNetwork', () => {
  it('callback receives data', async () => {
    const client = setupClient()

    await connect({ connector: client.connectors[0]! })

    const networks: GetNetworkResult[] = []
    const unwatch = watchNetwork((data) => networks.push(data))

    await switchNetwork({ chainId: 4 })
    await switchNetwork({ chainId: 1 })
    unwatch()

    expect(networks).toMatchInlineSnapshot(`
      [
        {
          "chain": {
            "blockExplorers": {
              "default": {
                "name": "Etherscan",
                "url": "https://rinkeby.etherscan.io",
              },
              "etherscan": {
                "name": "Etherscan",
                "url": "https://rinkeby.etherscan.io",
              },
            },
            "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            "id": 4,
            "name": "Rinkeby",
            "nativeCurrency": {
              "decimals": 18,
              "name": "Rinkeby Ether",
              "symbol": "RIN",
            },
            "network": "rinkeby",
            "rpcUrls": {
              "alchemy": "https://eth-rinkeby.alchemyapi.io/v2",
              "default": "https://eth-rinkeby.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
              "infura": "https://rinkeby.infura.io/v3",
            },
            "testnet": true,
            "unsupported": false,
          },
          "chains": [
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
              },
              "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
              "id": 1,
              "name": "Ethereum",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Ether",
                "symbol": "ETH",
              },
              "network": "homestead",
              "rpcUrls": {
                "alchemy": "https://eth-mainnet.alchemyapi.io/v2",
                "default": "https://eth-mainnet.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://mainnet.infura.io/v3",
              },
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://ropsten.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://ropsten.etherscan.io",
                },
              },
              "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
              "id": 3,
              "name": "Ropsten",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Ropsten Ether",
                "symbol": "ROP",
              },
              "network": "ropsten",
              "rpcUrls": {
                "alchemy": "https://eth-ropsten.alchemyapi.io/v2",
                "default": "https://eth-ropsten.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://ropsten.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://rinkeby.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://rinkeby.etherscan.io",
                },
              },
              "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
              "id": 4,
              "name": "Rinkeby",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Rinkeby Ether",
                "symbol": "RIN",
              },
              "network": "rinkeby",
              "rpcUrls": {
                "alchemy": "https://eth-rinkeby.alchemyapi.io/v2",
                "default": "https://eth-rinkeby.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://rinkeby.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
              },
              "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
              "id": 5,
              "name": "Goerli",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Goerli Ether",
                "symbol": "GOR",
              },
              "network": "goerli",
              "rpcUrls": {
                "alchemy": "https://eth-goerli.alchemyapi.io/v2",
                "default": "https://eth-goerli.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://goerli.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://kovan.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://kovan.etherscan.io",
                },
              },
              "id": 42,
              "name": "Kovan",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Kovan Ether",
                "symbol": "KOV",
              },
              "network": "kovan",
              "rpcUrls": {
                "alchemy": "https://eth-kovan.alchemyapi.io/v2",
                "default": "https://eth-kovan.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://kovan.infura.io/v3",
              },
              "testnet": true,
            },
          ],
        },
        {
          "chain": {
            "blockExplorers": {
              "default": {
                "name": "Etherscan",
                "url": "https://etherscan.io",
              },
              "etherscan": {
                "name": "Etherscan",
                "url": "https://etherscan.io",
              },
            },
            "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            "id": 1,
            "name": "Ethereum",
            "nativeCurrency": {
              "decimals": 18,
              "name": "Ether",
              "symbol": "ETH",
            },
            "network": "homestead",
            "rpcUrls": {
              "alchemy": "https://eth-mainnet.alchemyapi.io/v2",
              "default": "https://eth-mainnet.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
              "infura": "https://mainnet.infura.io/v3",
            },
            "unsupported": false,
          },
          "chains": [
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://etherscan.io",
                },
              },
              "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
              "id": 1,
              "name": "Ethereum",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Ether",
                "symbol": "ETH",
              },
              "network": "homestead",
              "rpcUrls": {
                "alchemy": "https://eth-mainnet.alchemyapi.io/v2",
                "default": "https://eth-mainnet.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://mainnet.infura.io/v3",
              },
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://ropsten.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://ropsten.etherscan.io",
                },
              },
              "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
              "id": 3,
              "name": "Ropsten",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Ropsten Ether",
                "symbol": "ROP",
              },
              "network": "ropsten",
              "rpcUrls": {
                "alchemy": "https://eth-ropsten.alchemyapi.io/v2",
                "default": "https://eth-ropsten.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://ropsten.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://rinkeby.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://rinkeby.etherscan.io",
                },
              },
              "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
              "id": 4,
              "name": "Rinkeby",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Rinkeby Ether",
                "symbol": "RIN",
              },
              "network": "rinkeby",
              "rpcUrls": {
                "alchemy": "https://eth-rinkeby.alchemyapi.io/v2",
                "default": "https://eth-rinkeby.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://rinkeby.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://goerli.etherscan.io",
                },
              },
              "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
              "id": 5,
              "name": "Goerli",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Goerli Ether",
                "symbol": "GOR",
              },
              "network": "goerli",
              "rpcUrls": {
                "alchemy": "https://eth-goerli.alchemyapi.io/v2",
                "default": "https://eth-goerli.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://goerli.infura.io/v3",
              },
              "testnet": true,
            },
            {
              "blockExplorers": {
                "default": {
                  "name": "Etherscan",
                  "url": "https://kovan.etherscan.io",
                },
                "etherscan": {
                  "name": "Etherscan",
                  "url": "https://kovan.etherscan.io",
                },
              },
              "id": 42,
              "name": "Kovan",
              "nativeCurrency": {
                "decimals": 18,
                "name": "Kovan Ether",
                "symbol": "KOV",
              },
              "network": "kovan",
              "rpcUrls": {
                "alchemy": "https://eth-kovan.alchemyapi.io/v2",
                "default": "https://eth-kovan.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                "infura": "https://kovan.infura.io/v3",
              },
              "testnet": true,
            },
          ],
        },
      ]
    `)
  })
})
