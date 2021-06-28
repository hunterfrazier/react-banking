function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emptyform, setEmptyform] = React.useState(true);
  const ctx = React.useContext(UserContext);

  React.useEffect(() => {
    if (emptyform) {
      setTimeout(() => document.getElementById('createAcctBtn').disabled = true, 100);
    }

    if (name.length && email.length && password.length) {
      if (document.getElementById('createAcctBtn')) {
        setTimeout(() => document.getElementById('createAcctBtn').disabled = false, 100);
        setEmptyform(false);
      }
    } else {
      setEmptyform(true);
    }
  });

  function validate(field, label) {

    // check if password validation
    // and if password length is 8 or more characters
    if (label == 'password' && field.length < 8) {
      alert('Password too short');
      return;
    }

    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    ctx.users.push({ name, email, password, balance: 0 });
    setShow(false);
    alert('New account successfully created');
    console.log('New account: ', name, email, password);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (
        <>
          <form>
            Name<br />
            <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br />
            Email address<br />
            <input autoComplete="bank-email" type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
            Password<br />
            <input autoComplete="bank-password" type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
            <button type="submit" id="createAcctBtn" className="btn btn-light" onClick={handleCreate}>Create Account</button>
          </form>
        </>
      ) : (
        <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
        </>
      )}
    />
  )
}