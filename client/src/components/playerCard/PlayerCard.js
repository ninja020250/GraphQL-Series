import React from "react";
import {
  MALE_AVATAR,
  FEMALE_AVATAR,
  NO_TEAM,
} from "components/playerCard/constants";
import { Button, ButtonGroup } from "@chakra-ui/react";
import JoinTeamDialog from "components/joinTeamDialog/JoinTeamDialog";

export default function PlayerCard(props) {
  const {
    id,
    name,
    phone,
    gender,
    account,
    email,
    team,
    getTeamsQuery,
    handleJoinTeam,
  } = props;

  const renderProfileInTeam = (team, gender) => {
    return (
      <div className="card--logo">
        <div className="team-name">{team?.name}</div>
        <img className="team-logo" src={team?.logo} alt="team" />
        <img
          className="profile-logo"
          src={gender === "nam" ? MALE_AVATAR : FEMALE_AVATAR}
          alt=""
        />
      </div>
    );
  };

  const renderProfile = (gender) => {
    return (
      <div className="card--logo">
        <div className="team-name">{"No Team"}</div>
        <img className="team-logo" src={NO_TEAM} alt="team" />
        <img
          className="profile-logo"
          src={gender === "nam" ? MALE_AVATAR : FEMALE_AVATAR}
          alt=""
        />
      </div>
    );
  };

  return (
    <div className="card player-card">
      {team ? renderProfileInTeam(team, gender) : renderProfile(gender)}
      <div className="card-info">
        <h2>{`${name} - ${account}`}</h2>
        <p>{`email: ${email}`}</p>
        <p>{`phone: ${phone}`}</p>
        {!team && (
          <JoinTeamDialog
            playerId={id}
            getTeamsQuery={getTeamsQuery}
            onsubmit={handleJoinTeam}
          />
        )}
      </div>
      <h2 className="status">{"Ready"}</h2>
    </div>
  );
}
