import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import NoWeb3 from './components/screens/noWeb3.js';
import Connect from './components/screens/connect.js';
import Rebalance from './components/screens/rebalance.js';

//IMPORT ABIs FROM POOLS LIST
import ABI_aavePool from './abis/pools.js';
import ABI_compoundPool from './abis/pools.js'; 

require('dotenv').config();

// //Yield Balancer Bot Tutorial
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/'+process.env.INFURA_API_KEY)

//POOL CONTRACTS
const aaveContract = new web3.eth.Contract(ABI_aavePool, process.env.AAVE_POOL_CONTRACT, {
    from: process.env.CONTRACT_ADDRESS, // default from address
    gasPrice: process.env.DEFAULT_GAS_PRICE // default gas price in wei
});

const compoundContract = new web3.eth.Contract(ABI_compoundPool, process.env.COMPOUND_POOL_CONTRACT, {
    from: process.env.CONTRACT_ADDRESS, // default from address
    gasPrice: process.env.DEFAULT_GAS_PRICE // default gas price in wei
});



// //const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;
// const web3 = new Web3('https://mainnet.infura.io/v3/'+process.env.INFURA_API_KEY);

//REACT STATE CHANGE FUNCTIONS
// 
// 


ReactDOM.render(<App />, document.getElementById('root')); 

var dappScreen = document.querySelector('.dappScreen');
var accountAddress = '';

if (typeof window.ethereum !== 'undefined') {
	ReactDOM.render(<Connect  />, dappScreen);
} else {
	ReactDOM.render(<NoWeb3  />, dappScreen);
}

//SHOW ACCOUNT ADDRESS YOU COULD ALSO DO web3.eth.getAccounts Here
window.ethereum.on('accountsChanged', function (accounts) {
  ReactDOM.render(window.ethereum.selectedAddress,document.querySelector('.accountAddress'));
  accountAddress = window.ethereum.selectedAddress;
});


// ReactDOM.render(<rebalancing msg="" />, document.querySelector('.dappScreen') ) ;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

