# JP ERC20 Token

This is a sample project to deploy a new ERC20 token.

# Sample Contract in Goerli

OurToken at [goerli.etherscan.io](https://goerli.etherscan.io/address/0x5352f3B4554060516F5bc01a75340b5648Fa65a1#code)

# Getting Started

## Requirements

- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` And get an output like `x.x.x`

## Tech Stack

[![Solidity](https://img.shields.io/badge/Solidity-00BFFF?style=for-the-badge&logo=Solidity&logoColor=black)](https://docs.soliditylang.org/en/v0.8.17/)
[![Javascript](https://img.shields.io/badge/javascript-FFFF00?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Hardhat](https://img.shields.io/badge/Hardhat-FFFF00?style=for-the-badge)](https://hardhat.org/docs)
[![OpenZeppelin](https://img.shields.io/badge/openzeppelin-0000FF?style=for-the-badge)](https://docs.openzeppelin.com/contracts/4.x/erc20)

## Hardhat Setup

* Run ```yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solidity-coverage dotenv @openzeppelin/contracts```.
* Add/copy .gitignore, .prettierrc, .prettierignore, README.md, hardhat-config.js, helper-hardhat-config.js

# Usage

## Deploy to Hardhat

Localhost is the default used, which already deploys contracts when initiated:
```
hh node --network hardhat
```
When needing to deploy again:
```
hh deploy
```

## Deployment to a testnet or mainnet

1. Setup environment variabltes

You'll want to set below parameters in your `.env` file.

* `PRIVATE_KEY`: The private key of your account.
* `MAINNET_RPC_URL`: This is url of the mainnet node you're working with.
* `GOERLI_RPC_URL`: This is url of the goerli testnet node you're working with.
* `ETHERSCAN_API_KEY`: This is the KEY you generate from etherscan.io. To be used to verify the contracts on testnet and mainnet.
* `COINMARKETCAP_API_KEY`: This is the KEY you generate from coinmarketcap.com. To be used to do quick USD calculations for gas usage.

2. Get testnet ETH

Head over to [goerlifaucet.com/](https://goerlifaucet.com/) and get some tesnet ETH. 

3. Deploy

```
hh deploy --network goerli
```

## Verify on etherscan

If you deploy to a testnet or mainnet, you can verify it if you get an [API Key](https://etherscan.io/myapikey) from Etherscan and set it as an environemnt variable named `ETHERSCAN_API_KEY`. 

In it's current state, if you have your api key set, it will auto verify goerli contracts!

However, you can manual verify with:

```
hh verify --constructor-args arguments DEPLOYED_CONTRACT_ADDRESS
```
See [Verifying your contracts](https://hardhat.org/hardhat-runner/docs/guides/verifying) for updated information.

## Scripts

* ```hh run scripts/mint.js```: Mint tokens and transfer them to the deployer (update constants accordingly)
* ```hh run scripts/transfer.js```: Transfer tokens to an address (update constants accordingly)

# Thank you!

[![JP Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jpcampaya/)
[![JP Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/0xJayPi)
