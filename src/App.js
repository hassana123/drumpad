import "./App.css";
import DrumPad from "./components/DrumPad";

function App() {
  return (
    <div className="App">
      <header>
        <h1>drum machine</h1>
      </header>
      <section>
        <DrumPad />
      </section>
    </div>
  );
}

export default App;
