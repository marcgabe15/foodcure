import React from "react";
import './Login.css';
// import dreamteamlogo from "../assets/DTElogo.png";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const LoginView = ({ onSubmit }) => {
  return (
    <div className="login-page container-fluid">
      <div className="login-modal">
        <div className="container">
          {/* <img className="dreamteam-logo" src={dreamteamlogo}></img> */}
          <h1>Login</h1>
          <form onSubmit={onSubmit} className="login-form container">
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
            <button className="button-signup">
            <Link to="/signup" className="link" onClick={() => this.props.history.push('/signup')}> 
                Sign Up
            </Link>
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default LoginView;