import React, { Component } from "react";
import TeamCard from "components/teamCard/TeamCard";
import { flowRight as compose } from "lodash";
import { graphql } from "@apollo/client/react/hoc";
import { getTeamsQuery } from "queries/queries";

class TeamContainer extends Component {
  renderTeam = () => {
    const { getTeamsQuery } = this.props;
    if (getTeamsQuery.loading) {
      return "Loading...";
    }
    const { teams } = getTeamsQuery;
    return teams.map((team) => {
      return <TeamCard key={team.id} {...team} />;
    });
  };

  render() {
    return (
      <div className="games">
        <div className="status">
          <h1>Active Games</h1>
          <input type="text" />
        </div>
        <div className="cards">{this.renderTeam()}</div>
      </div>
    );
  }
}

export default compose(graphql(getTeamsQuery, { name: "getTeamsQuery" }))(
  TeamContainer
);
