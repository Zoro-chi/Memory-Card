import React from "react";

import "./Score.css";

function Score(props) {
  const { currentScore, highScore } = props;

  return (
    <div className="score">
      <div>
        <h4>Current Score: {currentScore}</h4>
      </div>
      <div>
        <h4>High Score: {highScore}</h4>
      </div>
    </div>
  );
}

export default Score;
