import React, { Component } from 'react';

class Withdraw extends Component {
  render() {
    return( 
      <div className="withdraw">
        <p className="alert alert-success">12345 DAI Available</p> 
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">DAI</span>
          </div>
          <input type="number" step=".01" placeholder="WITHDRAW AMOUNT" className="form-control" aria-label="DAI Stablecoin"/>
        </div>
        <p className="card-text">Withdraw DAI from the contract.</p>
        <a href="#" className="btn btn-danger">Withdraw DAI</a> 
      </div>
    )
  }
}  

export default Withdraw;