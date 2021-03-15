import Menu from "components/menu";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PlayerContainer from "containers/PlayerContainer";
import GameContainer from "containers/GameContainer";
import TeamContainer from "containers/TeamContainer";

export default class Home extends Component {
  render() {
    return (
      <main>
        <section className="glass">
          <Menu />
          <div className="app-wrapper">
            <Switch>
              <Route path="/" component={PlayerContainer} exact />
              <Route path="/players" component={PlayerContainer} />
              <Route path="/games" component={GameContainer} />
              <Route path="/teams" component={TeamContainer} />
            </Switch>
          </div>
          {/* <div className="games">
            <div className="status">
              <h1>Active Games</h1>
              <input type="text" />
            </div>
            <div className="cards">
              <div className="card">
                <img src={assassins} alt="" />
                <div className="card-info">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PS5 Version</p>
                  <div className="progress"></div>
                </div>
                <h2 className="percentage">60%</h2>
              </div>
              <div className="card">
                <img src={sackboy} alt="" />
                <div className="card-info">
                  <h2>Sackboy A Great Advanture</h2>
                  <p>PS5 Version</p>
                  <div className="progress"></div>
                </div>
                <h2 className="percentage">60%</h2>
              </div>
              <div className="card">
                <img src={spiderman} alt="" />
                <div className="card-info">
                  <h2>Spiderman Miles Morales</h2>
                  <p>PS5 Version</p>
                  <div className="progress"></div>
                </div>
                <h2 className="percentage">60%</h2>
              </div>
            </div>
          </div> */}
        </section>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </main>
    );
  }
}
