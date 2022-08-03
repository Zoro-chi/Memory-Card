import React, { useState, useEffect } from "react";

import "./Score.css";

function Score(props) {
  const [currentScore, setCurrentScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

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
