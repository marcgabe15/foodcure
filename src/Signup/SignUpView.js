import React from "react";
import './Signup.css';
import shellhackslogo from '../assets/logo.png'
const SignUpView = ({ onSubmit }) => {
  return (
    <div className="signup-page container">
      <div className="signup-modal">
        <div className="container">
          <img className="shellhacks-logo" src={shellhackslogo}></img>
          <h1>Sign up</h1>
          <form onSubmit={onSubmit} class="signup-form container">
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
            <button className="button-signup" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpView;