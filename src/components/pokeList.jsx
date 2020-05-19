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

  render() {
    const { pokeList } = this.state;
    return (
      <React.Fragment>
        <div style={{ padding: '25px', width: '100%', height: '100px'}}>
          <span style={{ float: 'left'}}>
            <i class="fa fa-arrow-circle-left fa-4x"></i>
          </span>
          <span style={{ float: 'right'}}>
            <i class="fa fa-arrow-circle-right fa-4x"></i>
          </span>
        </div>
        <div  style={{ padding: '50px', width: '100%', height: '100%' }}>
          {pokeList.map((pokeMon) => {
            return (
              <PokeCard
                pokeName={pokeMon.name}
                pokeUrl={`https://projectpokemon.org/images/normal-sprite/${pokeMon.name}.gif`}
              />
            );
          })}
        </div>

      </React.Fragment>
    );
  }
}

export default PokeCardList;
