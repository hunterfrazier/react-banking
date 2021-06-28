
function NavBar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" id="menuHome" onClick={checkActive} href="#"><img src="img/bank.png" className="img-navbar" id="logo" /></a>
        <button className="navbar-toggler" id="navtoggle" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" id="menuCreateAccount" onClick={checkActive} href="#/create-account/" title="Create an Account">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="menuDeposit" onClick={checkActive} href="#/deposit/" title="Deposit Funds">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="menuWithdraw" onClick={checkActive} href="#/withdraw/" title="Withdraw Funds">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="menuAllData" onClick={checkActive} href="#/all-data/" title="All Data">All Data</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );

}