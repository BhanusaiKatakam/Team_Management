import React from "react";
import "./LoginScreen.css";
const LoginScreen = () => {
  return (
    <div className="loginContainer">
      <div className="loginLogoContainer">
        <img
          src={require("../../assets/images/logo.jpg")}
          alt="Logo"
          className="loginLogo"
        />
      </div>
      <div className="headerContainer">
        <p className="header">Welcome back</p>
        <p className="subHeader">Welcome back! Please enter your details</p>
      </div>
      <div className="fieldContainer">
        <div className="inputContainer">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="inputContainer">
          <label>Password</label>
          <input type="password" />
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default LoginScreen;
