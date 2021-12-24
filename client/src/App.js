import "./App.css";
import Entry from "./components/entry";
import Incoming from "./components/incoming";
import Todos from "./components/todos";

function App() {
  return (
    <div className="App">
      <Entry />
      <Todos />
      <Incoming />
    </div>
  );
}

export default App;
