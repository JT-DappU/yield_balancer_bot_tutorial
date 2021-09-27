import React, { Component } from 'react';

class Deposit extends Component {
  render() {
    return( 
      <div className="deposit">
        <p className="alert alert-success">12345 DAI Available</p> 
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