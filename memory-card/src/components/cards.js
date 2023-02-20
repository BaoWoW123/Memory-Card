import handleClick from "./eventhandler";
import { randomize } from "./randomizer";
import React from "react";

const Cards = (props) => {
  return (
    <div className="cards">
      {randomize(props.amount).map((image, i) => {
        return (
          //randomly generate divs of cards based on amount prop
          <div className="card" key={i} data-id={image.index}>
            <img src={image.img} onClick={(e) => handleClick(e, props)} />
            <div className="cardName">{image.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
