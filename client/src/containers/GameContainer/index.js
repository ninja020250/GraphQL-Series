import { graphql } from "@apollo/client/react/hoc";
import GameCard from "components/gameCard/GameCard";
import { flowRight as compose } from "lodash";
import { getGamesQuery } from "queries/queries";
import React, { Component } from "react";

class GameContainer extends Component {
  renderGames = () => {
    const { getGamesQuery } = this.props;
    if (getGamesQuery.loading) {
      return "Loading...";
    }
    const { games } = getGamesQuery;
    return games.map((game) => {
      return <GameCard key={game.id} {...game} />;
    });
  };
  render() {
    return (
      <div className="games">
        <div className="status">
          <h1>Active Games</h1>
          <input type="text" />
        </div>
        <div className="cards">
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

export default compose(graphql(getGamesQuery, { name: "getGamesQuery" }))(
  GameContainer
);
