import "./App.css";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title name="Manuel Bojaca" />
        <section>
          <Subtitle edad="30" />
          <Button info="Click me!" />
        </section>
      </header>
    </div>
  );
}

export default App;
