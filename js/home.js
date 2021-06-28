function Home() {
  const ctx = React.useContext(UserContext);

  return (
    <Card
      txtcolor="black"
      bgcolor="grey"
      header="HF Bank Home"
      title="Welcome to HF Bank!"
      text={(<>Hello {ctx.users[0].name}! <br /><br />
        You can <Link to='/create-account/'
          onClick={() => checkActive2('menuCreateAccount')}>Create another Account</Link></>)}
      body={(<img src="img/bank.png" className="img-fluid" alt="Responsive image" />)
      }
    />
  );
}
