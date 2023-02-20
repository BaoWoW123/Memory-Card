import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/cards.js";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [imgArr, setImgArr] = useState(5);

  const updateScore = (e) => {
    setScore(score + 1);
    return score;
  };

  const resetScore = () => {
    setScore(0);
    setImgArr(5);
    let msg = document.querySelector(".msg");
    if (msg.textContent) return (msg.textContent = "");
  };

  //runs when score updates
  useEffect(() => {
    if (score > bestScore) setBestScore(score);
    if (score === 20) {
      let msg = document.querySelector(".msg");
      msg.textContent = "You got all 20 cards!";
    } else if (score === imgArr) {
      setImgArr(imgArr + 5);
    }
  }, [score]);
  return (
    <div className="App">
      <header>
        <div className="title">Memory Cards</div>
      </header>
      <div className="scores">
        <div>Score: {score}</div>
        <div className="msg"></div>
        <div>Best Score: {bestScore}</div>
      </div>
      <Cards amount={imgArr} imgClick={updateScore} resetScore={resetScore} />
    </div>
  );
};

export default App;
