import React, { Component } from "react";
import { getPokeList } from "../services/pokeService";

const cardStyle = {
  width: "15%",
  height: "150px",
  backgroundColor: "red",
  margin: "15px",
  border: "1px",
  float: "left",
  borderRadius: "8px",
  
};

const PokeCard = (props) => {
  const { pokeName, pokeUrl } = props;
  return (
    <div style={cardStyle}>
      {/* <img
        style={{ float: "left", padding: '20px'}}
        src={pokeUrl}
        alt={""}
      /> */}
      <span
        style={{
          position: "relative",
          top: "0px",
          padding: "20px",
          margin: "20px",
        }}
      >
        <h3>{pokeName}</h3>
      </span>
    </div>
  );
};

//
export default PokeCard;






