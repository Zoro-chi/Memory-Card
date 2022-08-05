import React from "react";

import "./CardContainer.css";
import Bounty from "./Bounty";

function CardContainer(props) {
  const { chars, handleClick } = props;
  const bounties = chars.map((char, index) => (
    <Bounty key={index} char={char} handleClick={handleClick} />
  ));

  return <div className="cardContainer"> {bounties} </div>;
}

export default CardContainer;
