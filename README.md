# Yield Balancer Bot Tutorial
Learn how to create a yield balancing bot. You'll be able to automatically balance your crypto yields between exchanges. These files are to be used in conjunction with the Yield Balancer *Master Class* as available in the Dapp University Master Class Program available at https://dappuniversity.com/masterclass*

# About This Project
This project was created to take advantage of the changing yeild rates between liquidity pools. A liquidity pool is similar to a savings account, where a corperate bank uses your money either as collateral for their own investments, or to use for lending to other bank patrons. As a participant benefit, you recieve compensation as a yearly dividend or bonus. However because Decentralized Finance is open source, you can connect to these pools or "Crypto Savings Accounts" where the bonus is constantly changing. In DEFI we crypto enthusiasts call this ever changing bonus the YEILD of a POOL. It is measured in ANNUAL PERCENTAGE RATE (APR) which is the annual rate of return that the investments of the pool are currently projected to earn, unfortunately this antiquated measurement followed into DEFI from the non-crypto financial world possibly as a way to help traditional investors understand the return rates of the pools. As the APR Yeilds for pools are constantly changing from one pool to the next, there is NO guarantee that if you plan to store your money long term and earn interest from the pool that you are storing your funds. 

This problem can be solved with the use and implementation of this Dapp. 

# How It Works
The script is built and runs in conjunction with smart contracts that you will deploy to the MainNet Ethereum Blockchain. The script uses Web3.js to connect a wallet, then will accept DAI into a smart contract. I like to think of a smart contract as a factory. Factories take certain materials, Perform Different Operations, then Package and Ship a Product. Your smart contract will take in DAI cryptocurrency (Material), then transfer the DAI to the highest earning pool, the contract will then send the original DAI and it's earnings to the Original Wallet. 

# Getting Started
Tutorial Dependencies -- If you do not have sufficient knowledge about the following technologies and you would like to learn more before continuing, be sure to complete the Blockchain Developers Bootcamp provided by DappUniversity. You can enroll now at https://dappuniversity.com/bootcamp
<hr>
DappUniversity StarterKit
Solidity
Truffle
Ganache
Web3.js
React.js
Bootstrap

*Accounts Required*
Infura
MetaMask

To begin, make sure you have already created accounts/addresses with the previous service providers as they will used in this tutorial. 

Environment Setup -- If you are unfamiliar with the environments used in the tutorial, you can find a complete training on setting up your own local environment just like the one used in the tutorial in the DappUniversity Blockchain Developer Bootcamp. 

# Installation

/////////////////////////////////////////////

# Running The App

Open your terminal, navigate to the installation root folder and run the command:
<pre>npm run start</pre>

You will be redirected to a browser page. You will need to have MetaMask installed in this browser. Once the browser is loaded and MetaMask is installed, click the connect to app button. 

Now that you have a wallet connected. You can deposit DAI into the Smart Contract. Once the DAI is available in the smart contract, the process begins and you will notified as the BOT processes it's tasks. 

Once you are ready to retrieve your funds, you can click the withdrawl button. Follow the prompts to withdrawl DAI from the smart contract to the connected wallet. 

# Scaling Solutions

Although this is a helpful tool that can earn some returns on Yeild Balancing. This tutorial was only built with two pool providers, Compound Finance and AAVE. If you would like to increase your earnings potential, you would be able to add more Pools to this script by duplicating the settings and functions from one provider to the next. Most pool providers have documentation that can be easy to follow allong with. This tutorial was created with scaling in mind, so though it may require work on your part, it's easy enough to understand if you are able to get through this tutorial. 

# Resources

Learning
DappUniversity -- https://dappuniversity.com
DappU StarterKit -- https://github.com/dappuniversity/starter_kit

Cryptocurrency Liquidity Pool Providers
Compound Finance -- https://app.compound.finance/
AAVE -- https://app.aave.com/

BlockChain Services
Ganache -- https://www.trufflesuite.com/ganache
Infura Metrics -- https://infura.io/

