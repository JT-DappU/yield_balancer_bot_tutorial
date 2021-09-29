//WEB & CSS
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';

//REACT COMPONENTS
import React from 'react';
import ReactDOM from 'react-dom';
import NoWeb3 from './components/screens/noWeb3.js';
import Connect from './components/screens/connect.js';
import Deposit from './components/screens/deposit.js';
import Running from './components/screens/running.js';
import Withdraw from './components/screens/withdraw.js';
import App from './components/App';

//IMPORT ABIs FROM POOLS LIST
const ABI_aavePool = [{"inputs":[{"internalType":"address","name":"admin","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_logic","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"initialize","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"}];
const ABI_compoundPool = [{"inputs":[{"internalType":"address","name":"admin","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_logic","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"initialize","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"}];

//REQUIRED LIBRARIES
require('dotenv');

//CONNECT TO KOVAN TEST NETWORK
const Web3 = require('web3');
const web3 = new Web3('https://kovan.infura.io/v3/'+process.env.INFURA_API_KEY)

//CONNECT TO DAPP CONTRACT
// const dappContract = new web3.eth.Contract( ABI_YieldBalancerBot, process.env.CONTRACT_ADDRESS, {
//     //from: process.env.CONTRACT_ADDRESS, // default from address
// });

//CONNECT TO AAVE CONTRACT
const aaveContract = new web3.eth.Contract( ABI_aavePool, process.env.AAVE_POOL_CONTRACT, {
    //from: process.env.CONTRACT_ADDRESS, // default from address
});

//CONNECT TO COMPOUND CONTRACT
const compoundContract = new web3.eth.Contract(ABI_compoundPool, process.env.COMPOUND_POOL_CONTRACT, {
    //from: process.env.CONTRACT_ADDRESS, // default from address
});

//RENDER APP
ReactDOM.render(<App />, document.getElementById('root')); 

//CHECK IF METAMASK CONNECTED
if (typeof window.ethereum !== 'undefined') {
	ReactDOM.render(<Connect  />, document.querySelector('.dappScreen'));
} else {
	ReactDOM.render(<NoWeb3  />, document.querySelector('.dappScreen'));
}

//SHOW ACCOUNT ADDRESS //WEB3 DOES NOT WORK ANYMORE
window.ethereum.on('accountsChanged', function (accounts) {
  ReactDOM.render(window.ethereum.selectedAddress,document.querySelector('.accountAddress'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

