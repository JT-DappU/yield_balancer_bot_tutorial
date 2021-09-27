import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// //Yield Balancer Bot Tutorial
// const Web3 = require('web3');
// const config = require('./truffle-config.js');

// //const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;
// const web3 = new Web3('https://mainnet.infura.io/v3/'+process.env.INFURA_API_KEY);

//REACT STATE CHANGE FUNCTIONS
// 

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<rebalancing msg="" />, document.querySelector('.dappScreen') ) ;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

