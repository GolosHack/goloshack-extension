import React from "react";

import Login from "./login";
import Balance from "./balance";
import Send from "./send";

import golos from "../wallet";

export default class Widet extends React.Component {
  constructor(opts) {
    super(opts);

    this.state = {
      loding: false,
      login: false,
      send: false
    };
  }

  onLogin(user, pass) {
    this.setState({
      loading: true
    });

    golos.login(user, pass).then(([balance, history]) => {
      console.log("done");
      console.log(balance);
      console.log(history);

      this.setState({
        login: true,
        loding: false
      });
    });
  }

  onShowSend = () => {
    this.setState(state => ({
      ...state,
      send: !state.send
    }));
  };

  render() {
    return (
      <div>
        {!this.state.login && (
          <Login
            onLogin={this.onLogin.bind(this)}
            loading={this.state.loding}
          />
        )}
        {this.state.login &&
          !this.state.send && <Balance onSend={this.onShowSend} />}
        {this.state.login &&
          this.state.send && <Send onBack={this.onShowSend} />}
      </div>
    );
  }
}
