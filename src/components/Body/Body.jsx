import React, { useEffect, useState } from "react";

import "./Body.css";
import Score from "../Score/Score.jsx";
import CardContainer from "../Card/CardContainer";
import list from "../../list.js";
import shuffle from "../../utils/utils.js";

function Body(props) {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [chars, setChars] = useState(list);
  const [clickedBounty, setClickedBounty] = useState([]);

  useEffect(() => {
    setChars(shuffle(chars));
  }, []);

  const reset = () => {
    setCurrentScore(0);
    setHighScore(0);
    setClickedBounty([]);
  };

  const play = (charName) => {
    if (clickedBounty.includes(charName)) {
      reset();
    } else {
      const score = currentScore + 1;
      setCurrentScore(score);
      if (score > highScore) {
        setHighScore(score);
        setClickedBounty([...clickedBounty, charName]);
      }
    }
  };

  const handleClick = (e) => {
    const char = e.target.parentNode.lastChild.textContent;
    play(char);
    setChars(shuffle(chars));
  };

  return (
    <div className="body">
      <Score currentScore={currentScore} highScore={highScore} />
      <CardContainer chars={chars} handleClick={handleClick} />
    </div>
  );
}

export default Body;
