import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Counter from "./Counter";
import Event from "./Event";
import Form from "./Form";
import MultipleForms from "./MultipleForms";
function App() {
  return (
      <div className="App">
        {/* <Hello named = "Sajina" message = "Hi there "/> */}
        {/* <Fruits /> */}
        {/* <ConditionalComponent /> */}
        {/* <Event /> */}
        {/* <Counter /> */}
        <Form />
        <MultipleForms />
      </div>
  );
}

export default App;
