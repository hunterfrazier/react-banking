function Deposit() {
  const [deposit, setDeposit] = React.useState('');
  const ctx = React.useContext(UserContext);
  const [emptyform, setEmptyform] = React.useState(true);
  const [balance, setBalance] = React.useState(parseFloat(ctx.users[0].balance).toFixed(2));


  React.useEffect(() => {
    if (emptyform) {
      setTimeout(() => document.getElementById('depositBtn').disabled = true, 100);
    }

    if (deposit.length) {
      if (document.getElementById('depositBtn')) {
        setTimeout(() => document.getElementById('depositBtn').disabled = false, 100);
        setEmptyform(false);
      }
    } else {
      setEmptyform(true);
    }
  });


  function handleDeposit(e) {
    e.preventDefault();

    if (isNaN(deposit)) {
      document.getElementById('statusd').innerHTML = 'Not a number';
      return;
    }

    if (deposit < 0.01) {
      document.getElementById('statusd').innerHTML = 'Deposit must positive';
      return;
    }

    // ensure number is rounded to nearest 2 decimals
    let newbalance = parseFloat(parseFloat(balance) + parseFloat(deposit)).toFixed(2);

    console.log('Deposit Amount: ', deposit);
    console.log('New Balance: ', newbalance);

    ctx.users[0].balance = newbalance;
    setDeposit(deposit);
    setBalance(newbalance);

    document.getElementById('statusd').innerHTML = 'Successfully deposited: ' + parseFloat(deposit).toFixed(2);

  }



  return (
    <>
      <Card
        txtcolor="black"
        header="Deposit"
        title="Deposit Funds"
        text={(<>Balance:  {balance}</>)}
        body={
          <form>
            Deposit Amount<br />
            <input autoComplete="bank-deposit-amount" className="form-control" id="deposit-amount" placeholder="Enter deposit amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br />
            <button type="submit" id="depositBtn" className="btn btn-dark" onClick={handleDeposit}>Deposit</button>
            <div class="statusmsg" id="statusd"></div>
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
