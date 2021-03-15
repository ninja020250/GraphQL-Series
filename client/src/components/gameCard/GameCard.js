import React from "react";

export default function GameCard(props) {
  const { logo, name, description } = props;

  return (
    <div className="card game-card">
      <div className="card--logo">
        <img src={logo} alt="" />
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="progress"></div>
      </div>
      <h2 className="percentage">60%</h2>
    </div>
  );
}
