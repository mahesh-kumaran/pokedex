import React, { Component } from "react";
import { getPokeList } from "../services/pokeService";
import PokeCard from "./pokeCard";

class PokeCardList extends Component {
  state = {
    pokeList: [],
  };

  async componentDidMount() {
    const { data } = await getPokeList();
    const { results: pokeList, length: count } = data;

    console.log(count);
    this.setState({ pokeList });
  }

  handleCardClick = (pokeId) => {
    this.props.history.push(`/pokemon/${pokeId}`);
  };

  render() {
    const { pokeList } = this.state;
    return (
      <React.Fragment>
        {/* <div
          style={{
            padding: "25px",
            width: "100%",
            height: "100px",
            margin: "",
          }}
        >
          <span style={{ float: "left" }}>
            <i className="fa fa-arrow-circle-left fa-4x"></i>
          </span>
          <span style={{ float: "right" }}>
            <i className="fa fa-arrow-circle-right fa-4x"></i>
          </span>
        </div> */}
        <div
          style={{
            padding: "50px",
            width: "100%",
            height: "100%",
            margin: "auto",
          }}
        >
          {pokeList.map((pokeMon) => {
            let order = pokeMon.url.split("/").reverse()[1];
            return (
              <PokeCard
                key={order}
                pokeName={pokeMon.name}
                pokeUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${order}.png`}
                pokeOrder={order}
                onCardClick={() => {
                  this.handleCardClick(order);
                }}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default PokeCardList;
