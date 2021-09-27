import ReactDOM from 'react-dom';
import React, { Component } from 'react';

async function connect() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  ReactDOM.render(window.ethereum.selectedAddress,document.querySelector('.accountAddress'));
}

window.ethereum.on('accountsChanged', function (accounts) {
  ReactDOM.render(window.ethereum.selectedAddress,document.querySelector('.accountAddress'));
});

class Connect extends Component {
  render() {
    return( 
      <div className="connect">
        <p className="alert alert-info">Web3 Ready to Connect</p>
        <p className="card-text">Connect to the Dapp and get started.</p>
        <a href="#" onClick={connect} className="btn btn-primary">Connect to App</a> 
      </div>
    )
  }
}  

export default Connect;