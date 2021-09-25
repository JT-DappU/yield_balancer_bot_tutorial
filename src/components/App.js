import React, { Component } from 'react';
import logo from '../images/coin.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            @DappUniversity/yield_balancer_bot_tutorial
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mx-auto">
               
               <div class="card m-5 mx-auto col-8">
                  <h5 class="card-title pt-3 pb-1">DAI Yield Balancer</h5>
                  <p class="card-text">Please download MetaMask to continue.</p>
                  <img src={logo} class="card-img px-5" alt="..."/>
                  <div class="card-body">

                    {/* COMPONENT
                      * Name: Web3_Found_Screen
                      * Imports: --
                      * Triggers: --
                      * Controls: -- 
                    */}
                    <div class="web3_not_found d-none">
                      <p class="alert alert-danger">Web3 Connection Not Found</p>
                      <p class="card-text">Please download MetaMask to continue.</p>
                      <a href="#" class="btn btn-warning">Download MetaMask</a>
                    </div>

                    {/* COMPONENT
                      * Name: Connect_Web3_Screen
                      * Imports: --
                      * Triggers: --
                      * Controls: connect(), 
                    */}
                    <div class="web3_found d-none">
                      <p class="alert alert-info">Web3 Ready to Connect</p>
                      <p class="card-text">Connect to the Dapp and get started.</p>
                      <a href="#" class="btn btn-primary">Connect to App</a> {/* connect() */}
                    </div>

                    {/* COMPONENT
                      * Name: Deposit_Funds_Screen
                      * Imports: _userAvailableDAI
                      * Triggers: --
                      * Controls: deposit(), 
                    */}
                    <div class="deposit_funds d-none">
                      <p class="alert alert-success">12345 DAI Available</p> {/* _userAvailableDai */}
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text">DAI</span>
                        </div>
                        <input type="number" step=".01" placeholder="TRANSFER AMOUNT" class="form-control" aria-label="DAI Stablecoin"/>
                      </div>
                      <p class="card-text">Deposit DAI into the contract.</p>
                      <a href="#" class="btn btn-success">Deposit DAI</a> {/* deposit() */}
                    </div>

                    {/* COMPONENT
                      * Name: DappRunning_Screen
                      * Imports: _aaveAPR, _compoundAPR, _winner, _totalEarnings
                      * Triggers: watchTotalEarnings()
                      * Controls: rebalance(), withdraw(),
                    */}
                    <div class="running d-none">
                      <p class="card-text">You are currently earning with <span class="winner">AAVE</span>.</p> {/* _winner */}
                      <div class="media">
                        <img src="https://app.compound.finance/compound-components/assets/asset_AAVE.svg" class="col-4" alt="..."/>
                        <div class="media-body">
                          <h5 class="mt-0">AAVE</h5>
                          <div class="alert alert-info">2.86 %APR</div> {/* _aaveAPR */}
                        </div>
                      </div>
                      <div class="media border-top py-3">
                        <img src="https://app.compound.finance/compound-components/assets/asset_COMP.svg" class="col-4" alt="..."/>
                        <div class="media-body">
                          <h5 class="mt-0">COMPOUND</h5>
                          <div class="alert alert-success">2.86 %APR</div> {/* _compoundAPR */}
                        </div>
                      </div>
                      <h5 class="alert alert-primary">Total Earnings <span class="earnings">.05</span> DAI</h5> {/* _totalEarnings */}
                      <a href="#" class="mx-2 btn btn-info">Rebalance</a> {/* rebalance() */}
                      <a href="#" class="mx-2 btn btn-danger">Withdraw</a> {/* withdraw() */}
                    </div>

                    {/* COMPONENT
                      * Name: Rebalancing_Screen
                      * Imports: _rebalancingMsg, _finishRebalanceBTN
                      * Triggers: rebalanceCheckingYields(), rebalanceTransferFunds(), rebalanceComplete(), 
                    */}
                    <div class="rebalancing d-none">
                      <p class="alert alert-info">Checking for the best Yield.</p> {/* _rebalancingMsg */}
                      <div class="container-fluid p-4">
                        <div class="spinner-border text-info p-5 " role="status" >
                          <span class="sr-only">Loading...</span> 
                        </div>
                      </div>
                      <p class="card-text py-2">Please wait while your rebalance is processed.</p>
                      <a href="#" class="btn btn-primary mt-3 d-none">Continue</a> {/* _finishRebalanceBTN */}
                    </div>

                    {/* COMPONENT
                      * Name: Withdraw_Screen
                      * Imports: _contractBalance
                      * Controls: withdrawFunds()
                    */}
                    <div class="withdraw ">
                      <p class="alert alert-success">12345 DAI Available</p> {/* _contractBalance */}
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text">DAI</span>
                        </div>
                        <input type="number" step=".01" placeholder="WITHDRAW AMOUNT" class="form-control" aria-label="DAI Stablecoin"/>
                      </div>
                      <p class="card-text">Withdraw DAI from the contract.</p>
                      <a href="#" class="btn btn-danger">Withdraw DAI</a> {/* withdrawFunds() */}
                    </div>


                  </div>
                </div>


                <p>Built With Love by DappUniversity</p>
                <a
                  className="App-link"
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LEARN BLOCKCHAIN <u><b>NOW! </b></u>
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
