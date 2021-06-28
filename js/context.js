const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    return 'card mb-12 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{ width: "480px", margin: "1em auto", maxWidth: "90%" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>
  );
}


function CardJson(props) {

  return (
    <div className="card mb-12" style={{ width: "100%", margin: "1em auto", maxWidth: "100%" }}>
      <div className="card-title ad">
        {props.title && (<h5>{props.title}</h5>)}
      </div>
      <div className="card-header ad">
        {props.header && (<>{props.header}</>)}
      </div>
      <div className="card-body ad">
        {props.body && (<p>{props.body}</p>)}
      </div>
    </div>
  );
}
