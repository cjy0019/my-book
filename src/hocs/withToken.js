// function Pepero(props) {
//   return <div>나는 Pepero {props.token}</div>;
// }

export default function withToken(Component) {
  function NewComponent(props) {
    const token = localStorage.getItem('token');
    return <Component token={token} />;
  }
  NewComponent.displayName = `${Component.displayName} <= withToken`;

  return NewComponent;
}

// const Giftbox = withToken(Pepero);

// function withRouter(Component) {
//   const NewComponent = () => {
//     return <Component history={history} location={location} match={match} />;
//   };
//   return NewComponent;
// }

// export default withRouter(LoginButton);
