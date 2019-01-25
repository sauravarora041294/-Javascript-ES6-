import React, { Component } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./Logoutbutton";
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogIn: this.props.isLoggedIn
    };
    this.toggleFlag = this.toggleFlag.bind(this);
  }
  render() {
    const loginFlag = this.state.isLogIn;
    if (loginFlag) {
      return (
        <div>
          <h4> Welcome User </h4>
          <LogoutButton onClick={this.toggleFlag} />
        </div>
      );
    }
    return (
      <div>
        <h4>Welcome stranger! </h4>
        <LoginButton onClick={this.toggleFlag} />
      </div>
    );
  }

  toggleFlag() {
    this.setState(function(state) {
      return { isLogIn: !state.isLogIn };
    });
  }
}
export default LoginComponent;
