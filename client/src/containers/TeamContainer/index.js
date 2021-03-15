import React, { Component } from "react";
import GameCard from "components/gameCard/GameCard";

export default class TeamContainer extends Component {
  render() {
    return (
      <div className="games">
        <div className="status">
          <h1>Active Games</h1>
          <input type="text" />
        </div>
        <div className="cards">
          <GameCard />
        </div>
      </div>
    );
  }
}
