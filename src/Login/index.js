import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../constants/apiconfig";

import LoginView from "./LoginView";

class LoginContainer extends Component {
  handleSignUp = async event => {
    console.log('started authentication')
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };
  goToSignup = async event => {
    console.log('switched to login page')
    this.props.history.push("/signup")
  }

  render() {
    return <LoginView onSubmit={this.handleSignUp} goToSignup={this.goToSignup}/>;
  }
}

export default withRouter(LoginContainer);