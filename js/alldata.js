// {JSON.stringify(ctx)}

function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <CardJson
        title="All Data"
        header={<><span>Name</span> <span>Email</span><span>Password</span><span>Balance</span></>}
        body={ctx.users.map((usr, key) => {
          return <div className="row1" key={key}><span>{usr.name}</span><span>{usr.email}</span><span>{usr.password}</span><span>{usr.balance}</span></div>
        })}
      />
    </>
  );
}
