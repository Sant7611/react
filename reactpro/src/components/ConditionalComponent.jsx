import Welcome from "../Welcome";
import Code from "./Code";

export default function ConditionalComponent() {
  //   const display = false;
  //   if (display) {
  //     return (
  //       <Welcome />
  //     );
  //   } else {
  //     return (
  //         <Code />
  //     );
  //   }

//   let messageOne = <h1>This is Message 1</h1>;
//   let messageTwo = <h1>This is message 2</h1> ;
  let message;
//   const display = true;

//   if (display) 
//      message = <h1>This is Message 1</h1>;
//   else 
//    message = <h1>This is message 2</h1>;
//    return message;

// // Using ternary Operator
// const display = false;
// return display ? <h1>Message 1</h1> : <h1>Message 2</h1>;

const display = false;
return display ? <Welcome /> : <Code />;

}
