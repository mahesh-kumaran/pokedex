import React, { Component } from "react";
import { getPokeProfile } from "../services/pokeService";
import { makeThreeDigits, convertUpperCase } from "../common/utils";
import Image from "./common/image";
import RadarChart from "./common/radarChart";

import "../assets/css/profile.css";

class PokeProfile extends Component {
  state = {
    profile: {},
    name: "",
    orderNo: 0,
    height: 0,
    weight: 0,
    pokeStatLabels: [],
    pokeStatData: [],
  };

  async componentDidMount() {
    const { data: profile } = await getPokeProfile(
      this.props.match.params.pokeId
    );

    console.log(profile);

    const state = { ...this.state };
    state.profile = profile;
    state["name"] = profile.name;
    state["orderNo"] = profile.name;
    state["weight"] = profile.weight;
    state["height"] = profile.height;

    state["pokeStatLabels"] = profile.stats.map((stat) => {
      return stat.stat.name;
    });

    state["pokeStatData"] = profile.stats.map((stat) => {
      return stat.base_stat;
    });

    this.setState(state);
  }
// https://pokeapi.co/api/v2/pokemon-species/5/
//   https://pokeapi.co/api/v2/evolution-chain/2/

  render() {
    const { name } = this.state.profile;

    console.log("Name", name);

    return (
      <div className="profile-card">
        <div className="poke-profile-image">
          <Image
            imageUrl={`https://img.pokemondb.net/artwork/large/${this.state.profile.name}.jpg`}
            imgHeight={"350"}
            imgWidth={"350"}
          />
        </div>
        <div className="nameorder-bullet">
          <p>{makeThreeDigits(this.state.profile.order)}</p>
          <p>{convertUpperCase(name)}</p>
        </div>

        <div className="details-box"></div>

        <div className=".radarchart">
          {}
          <RadarChart
            chartLabels={this.state.pokeStatLabels}
            chartData={this.state.pokeStatData}
          />
          {/*  chartLabels, chartData, chartTitle */}
        </div>
      </div>
    );
  }
}

export default PokeProfile;
