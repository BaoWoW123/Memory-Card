import { useState } from "react";

const Score = () => {
  const [score, setScore] = useState(0);

  return <div className="score">Score: {score}</div>;
};

export default Score;
