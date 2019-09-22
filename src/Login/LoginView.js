import React from "react";
import './Login.css';
import shellhackslogo from "../assets/logo.png";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const LoginView = ({ onSubmit, goToSignup }) => {
  return (
    <div className="login-page container-fluid">
      <div className="login-modal">
        <div className="container">
          <img className="shellhacks-logo" src={shellhackslogo}></img>
          <h1>Login</h1>
          <div className="login-form">
            <form onSubmit={onSubmit} className="container">
              <input
                className="input"
                name="email"
                type="email"
                placeholder="Email"
              />
              <input
                className="input"
                name="password"
                type="password"
                placeholder="Password"
              />
              <button className="button-signin" type="submit">Sign In</button>
            </form>
            <button className="button-signup">
              <Link to="/signup" className="link" onSubmit={goToSignup}> 
                  Sign Up
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;