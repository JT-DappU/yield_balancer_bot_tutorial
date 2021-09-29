import React, { Component } from 'react';

class Running extends Component {
  render() {
    return( 
      <div className="running">
        <p className="card-text">You are currently earning with <span className="winner">AAVE</span>.</p> 
        <div className="media">
          <img src="https://app.compound.finance/compound-components/assets/asset_AAVE.svg" className="col-4" alt="..."/>
          <div className="media-body">
            <h5 className="mt-0">AAVE</h5>
            <div className="alert alert-info">2.86 %APR</div> 
          </div>
        </div>
        <div className="media border-top py-3">
          <img src="https://app.compound.finance/compound-components/assets/asset_COMP.svg" className="col-4" alt="..."/>
          <div className="media-body">
            <h5 className="mt-0">COMPOUND</h5>
            <div className="alert alert-success">2.86 %APR</div> 
          </div>
        </div>
        <h5 className="alert alert-primary">Total Earnings <span className="earnings">.05</span> DAI</h5> 
        <a href="#" className="mx-2 btn btn-info">Rebalance</a> 
        <a href="#" className="mx-2 btn btn-danger">Withdraw</a> 
      </div>
    )
  }
}  

export default Running;