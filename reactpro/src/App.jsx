import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
function App() {
  return (
      <div className="App">
        {/* <Hello named = "Sajina" message = "Hi there "/> */}
        {/* <Fruits /> */}
        <ConditionalComponent />
      </div>
  );
}

export default App;
