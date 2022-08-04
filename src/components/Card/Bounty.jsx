import React from "react";

function Bounty(props) {
  const { char, handleClick } = props;

  return (
    <div className="bounty" onClick={handleClick}>
      <img src={char.img} alt={char.name} />
      <p> {char.name} </p>
    </div>
  );
}

export default Bounty;
