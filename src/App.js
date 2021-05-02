import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div className="app__nav">
        <h1> Todo with Redux</h1>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
