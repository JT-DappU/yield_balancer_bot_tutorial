import React, { Component } from 'react';

class Rebalance extends Component {

  if {this.props.msg === "Rebalancing Completed"} {
    this.props.btnToggle = "";
  }
  render() {
    return( 
      <div className="rebalancing">
        <p className="alert alert-info">{this.props.msg}</p> 
        <div className="container-fluid p-4">
          <div className="spinner-border text-info p-5 " role="status" >
            <span className="sr-only">Loading...</span> 
          </div>
        </div>
        <p className="card-text py-2">Please wait while your rebalance is processed.</p>
        <a href="#" className="btn btn-primary mt-3 finish">Continue</a> 
      </div>
    )
  }
}  

export default Rebalance;