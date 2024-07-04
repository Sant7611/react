function Hello({named, message}) {
  console.log({named, message});
//   const {named, message} = props;
  return (
    <div>
      <h1>This is {named}</h1>
      <h2>hey {named} {message}</h2>
    </div>
  );
}

export default Hello;
