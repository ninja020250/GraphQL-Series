import MENU_ITEMS from "components/menu/menuItem";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { controller } from "static";

export default class Menu extends Component {
  renderMenu = () => {
    return MENU_ITEMS.map((item) => (
      <Link to={item.url} className="link">
        <img src={item.icon} alt={item.name} />
        <h2>{item.name}</h2>
      </Link>
    ));
  };

  render() {
    return (
      <div className="dashboard">
        {/* <div className="user">
          <img src={avatar} alt="" />
          <h3>Simo Edwin</h3>
          <p>Pro Member</p>
        </div> */}
        <div className="links">{this.renderMenu()}</div>
        <div className="pro">
          <h2> Join pro for free game</h2>
          <img src={controller} alt="" />
        </div>
      </div>
    );
  }
}
