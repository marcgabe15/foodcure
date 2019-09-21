import React from "react";
import './Signup.css';
const SignUpView = ({ onSubmit }) => {
  return (
    <div className="signup-page container">
      <div className="signup-modal">
        <div className="container">
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