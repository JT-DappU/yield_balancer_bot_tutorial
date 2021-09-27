import React, { Component } from 'react';

const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/'+process.env.INFURA_API_KEY)

const accounts = web3.eth.getAccounts()
const address = accounts[0]

class Deposit extends Component {
  constructor() {
    super();
    this.state = {
      dai: web3.eth.getBalance(address)
    }
  }
  render() {
    return( 
      <div className="deposit">
        <p className="alert alert-success">{this.state.dai} DAI Available</p> 
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">DAI</span>
          </div>
          <input type="number" step=".01" placeholder="TRANSFER AMOUNT" className="form-control" aria-label="DAI Stablecoin"/>
        </div>
        <p className="card-text">Deposit DAI into the contract.</p>
        <a href="#" className="btn btn-success">Deposit DAI</a> 
      </div>
    )
  }
}  

export default Deposit;