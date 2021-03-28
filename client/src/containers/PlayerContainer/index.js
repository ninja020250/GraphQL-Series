import React, { Component } from "react";
import PlayerCard from "components/playerCard/PlayerCard";
import { flowRight as compose, lowerCase } from "lodash";
import { graphql } from "@apollo/client/react/hoc";
import {
  getPlayersQuery,
  getTeamsQuery,
  joinTeamMutation,
} from "queries/queries";
import _ from "lodash";
import { Input } from "@chakra-ui/react";

class PlayerContainer extends Component {
  state = {
    list: [],
    searchValue: "",
  };

  componentDidMount() {
    const { getPlayersQuery } = this.props;
    const { players = [] } = getPlayersQuery;
    this.setState({
      list: players,
    });
  }

  handleSearch = (e) => {
    const { value } = e.target;
    const { getPlayersQuery } = this.props;
    const { players } = getPlayersQuery;
    const list = _.filter(players, (player) => {
      const searchContent = player.name + player.account;
      return searchContent.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({
      searchValue: value,
      list,
    });
  };

  handleJoinTeam = ({ teamId, playerId }) => {
    const { joinTeamMutation } = this.props;
    joinTeamMutation({
      variables: {
        teamId,
        playerId,
      },
      refetchQueries: [
        {
          query: getPlayersQuery,
        },
      ],
    });
  };

  renderPlayers = () => {
    const { getPlayersQuery, getTeamsQuery } = this.props;
    if (getPlayersQuery.loading) {
      return "Loading...";
    }
    // const { players } = getPlayersQuery;
    return this.state.list.map((player) => {
      return (
        <PlayerCard
          key={player.id}
          {...player}
          getTeamsQuery={getTeamsQuery}
          handleJoinTeam={this.handleJoinTeam}
        />
      );
    });
  };
  render() {
    return (
      <div className="games">
        <div className="status">
          <h1>Player List</h1>
          <Input
            type="text"
            className="mt-1"
            onChange={this.handleSearch}
            value={this.state.searchValue}
          />
        </div>
        <div className="cards cards-player">{this.renderPlayers()}</div>
      </div>
    );
  }
}

export default compose(
  graphql(getPlayersQuery, { name: "getPlayersQuery" }),
  graphql(getTeamsQuery, { name: "getTeamsQuery" }),
  graphql(joinTeamMutation, { name: "joinTeamMutation" })
)(PlayerContainer);
