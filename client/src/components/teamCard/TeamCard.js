import React from "react";

export default function TeamCard(props) {
  const { logo, name, players } = props;

  return (
    <div className="card player-card">
      <div className="card--logo">
        <img className="team-logo" src={logo} alt="team" />
      </div>
      <div className="card-info">
        <h2 className="team-name">{name}</h2>
        <ul className="list-player">
          {players.map((player) => (
            <li>
              <a href="#">&#10148; {player.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="number-of-member">{players.length}</h2>
    </div>
  );
}
