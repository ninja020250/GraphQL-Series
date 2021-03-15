import React, { Component } from "react";
import PlayerCard from "components/playerCard/PlayerCard";
import { flowRight as compose } from "lodash";
import { graphql } from "@apollo/client/react/hoc";
import { getPlayersQuery } from "queries/queries";

 class PlayerContainer extends Component {
  renderGames = () => {
    const { getPlayersQuery } = this.props;
    if (getPlayersQuery.loading) {
      return "Loading...";
    }
    const { players } = getPlayersQuery;
    return players.map((game) => {
      return <PlayerCard key={game.id} {...game} />;
    });
  };
  render() {
    return (
      <div className="games">
        <div className="status">
          <h1>Player List</h1>
          <input type="text" />
        </div>
        <div className="cards cards-player">
          {this.renderGames()}
          {/* <div className="card">
            <img src={assassins} alt="" />
            <div className="card-info">
              <h2>Assassins Creed Valhalla</h2>
              <p>PS5 Version</p>
              <div className="progress"></div>
            </div>
            <h2 className="percentage">60%</h2>
          </div> */}
          {/* <div className="card">
            <img src={sackboy} alt="" />
            <div className="card-info">
              <h2>Sackboy A Great Advanture</h2>
              <p>PS5 Version</p>
              <div className="progress"></div>
            </div>
            <h2 className="percentage">60%</h2>
          </div> */}
          {/* <div className="card">
            <img src={spiderman} alt="" />
            <div className="card-info">
              <h2>Spiderman Miles Morales</h2>
              <p>PS5 Version</p>
              <div className="progress"></div>
            </div>
            <h2 className="percentage">60%</h2>
          </div> */}
        </div>
      </div>
    );
  }
}


export default compose(graphql(getPlayersQuery, { name: "getPlayersQuery" }))(
  PlayerContainer
);
