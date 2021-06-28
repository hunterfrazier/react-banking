function Spa() {

  return (
    <HashRouter>
      <UserContext.Provider value={{ users: [{ name: 'Hunter', email: 'hunter@email.com', password: 'secretpassword', balance: 500 }] }}>
        <div className="container" style={{ padding: "20px", maxWidth: "740px" }}>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/create-account/" component={CreateAccount} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/all-data/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa />,
  document.getElementById('root')
);