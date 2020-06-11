import React from "react";
import "../assets/css/card.css";
import { makeThreeDigits } from "../common/utils";

const PokeCard = (props) => {
  const { pokeName, pokeUrl, pokeOrder } = props;

  return (
    <div className="poke-card" onClick={props.onCardClick}>
      <div className="poke-image">
        <img className="animated-gif" src={pokeUrl} alt={""} />
      </div>
      <span className="poke-order">{`${makeThreeDigits(pokeOrder)}`}</span>
      <span className="poke-name">{pokeName.toUpperCase()}</span>
    </div>
  );
};

//
export default PokeCard;
