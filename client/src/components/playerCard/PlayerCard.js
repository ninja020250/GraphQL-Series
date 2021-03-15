import React from "react";

const FEMALE_AVATAR =
  "https://as2.ftcdn.net/jpg/01/96/47/15/500_F_196471509_WG1kfiqKdYkPxk7WLibohyxnt4g3QNPn.jpg";
const MALE_AVATAR =
  "https://www.clipartkey.com/mpngs/m/128-1284186_semantic-ui-avatar.png";

export default function GameCard(props) {
  const { name, phone, gender, account, email, age } = props;

  return (
    <div className="card player-card">
      <div className="card--logo">
        <img src={gender === "nam" ? MALE_AVATAR : FEMALE_AVATAR} alt="" />
      </div>
      <div className="card-info">
        <h2>{`${name} - ${account}`}</h2>
        <p>{`email: ${email}`}</p>
        <p>{`phone: ${phone}`}</p>
      </div>
      <h2 className="status">{"Ready"}</h2>
    </div>
  );
}
