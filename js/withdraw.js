function Withdraw() {

  const [withdraw, setWithdraw] = React.useState('');
  const ctx = React.useContext(UserContext);
  const [emptyform, setEmptyform] = React.useState(true);
  const [balance, setBalance] = React.useState(parseFloat(ctx.users[0].balance).toFixed(2));

  React.useEffect(() => {
    if (emptyform) {
      setTimeout(() => document.getElementById('withdrawBtn').disabled = true, 100);
    }

    if (withdraw.length) {
      if (document.getElementById('withdrawBtn')) {
        setTimeout(() => document.getElementById('withdrawBtn').disabled = false, 100);
        setEmptyform(false);
      }
    } else {
      setEmptyform(true);
    }
  });

  function handleWithdraw(e) {
    e.preventDefault();

    if (isNaN(withdraw)) {
      document.getElementById('statusw').innerHTML = 'Not a number';
      return;
    }

    if (withdraw < 0.01) {
      document.getElementById('statusw').innerHTML = 'Withdraw must positive';
      return;
    }

    // ensure number is rounded to nearest 2 decimals
    let newbalance = parseFloat(balance - withdraw).toFixed(2);


    if (parseFloat(newbalance).toFixed(2) < 0) {
      document.getElementById('statusw').innerHTML = 'Low Funds';
      return;
    } else {
      document.getElementById('statusw').innerHTML = 'Successfully withdrew: ' + parseFloat(withdraw).toFixed(2);
    }



    console.log('Withdraw Amount', withdraw);
    console.log('New Balance:', newbalance);

    setBalance(newbalance);
    ctx.users[0].balance = newbalance;



  }

  return (
    <>
      <Card
        txtcolor="black"
        header="Withdraw"
        title="Withdraw Funds"
        text={"Balance: " + balance}
        body={
          <form>
            Withdraw Amount<br />
            <input autoComplete="bank-withdraw-amount" className="form-control" id="withdraw-amount" placeholder="Enter withdraw amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br />
            <button type="submit" id="withdrawBtn" className="btn btn-dark" onClick={handleWithdraw}>Withdraw</button>
            <div class="statusmsg" id="statusw"></div>
          </form>
        }
      />
      <hr />
      {ctx.users.map((usr, key) => {
        if (key == 0) return <option key={key}> Welcome, {usr.name}</option>;
      })}
    </>
  )
}
