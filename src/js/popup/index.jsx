import React from "react";

import Login from "./login";
import golos from "../wallet";

export default class Widet extends React.Component {
  constructor(opts) {
    super(opts);

    this.state = {
      login: false
    };
  }

  onLogin(user, pass) {
    // this.setState({
    //   login: true
    // });

    golos.login(user, pass);
  }

  render() {
    return (
      <div>
        {!this.state.login && <Login onLogin={this.onLogin.bind(this)} />}
        {this.state.login && <div>Готово</div>}
      </div>
    );
  }
}
