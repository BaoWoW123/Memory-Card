import "./App.css";
import Cards from "./components/cards.js";
import Score from "./components/score";
const App = () => {
  return (
    <div className="App">
      <header>
        <div className="title">Memory Card</div>
      </header>
      <Score />
      <Cards />
    </div>
  );
};

export default App;
