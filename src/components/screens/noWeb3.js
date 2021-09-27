import React, { Component } from 'react';

class NoWeb3 extends Component {
  render() {
    return( 
      <div className="no-web3">
        <p className="alert alert-danger">Web3 Connection Not Found</p>
        <p className="card-text">Please download MetaMask to continue.</p>
        <a href="#" className="btn btn-warning">Download MetaMask</a>
      </div>
    )
  }
} 

export default NoWeb3;

