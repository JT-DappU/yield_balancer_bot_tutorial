import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import NoWeb3 from './components/screens/noWeb3.js';
import Connect from './components/screens/connect.js';

// //Yield Balancer Bot Tutorial
// const Web3 = require('web3');
// const config = require('./truffle-config.js');

// //const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;
// const web3 = new Web3('https://mainnet.infura.io/v3/'+process.env.INFURA_API_KEY);

//REACT STATE CHANGE FUNCTIONS
// 

ReactDOM.render(<App />, document.getElementById('root')); 

const dappScreen = document.querySelector('.dappScreen');

if (typeof window.ethereum !== 'undefined') {
	ReactDOM.render(<Connect  />, dappScreen);
} else {
	ReactDOM.render(<NoWeb3  />, dappScreen);
}

function connect() {
  const userAccount = window.ethereum.request({ method: 'eth_requestAccounts' });
  ReactDOM.render(userAccount,document.querySelector('.accountAddress'));
}


// ReactDOM.render(<rebalancing msg="" />, document.querySelector('.dappScreen') ) ;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

