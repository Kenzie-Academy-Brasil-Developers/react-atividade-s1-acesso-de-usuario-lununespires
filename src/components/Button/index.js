import React from "react";
import "./style.css";

const Button = ({ Login, loginState }) => (
  <button onClick={Login} className="button">
    {loginState ? "Logout" : "Login"}
  </button>
);

export default Button;
