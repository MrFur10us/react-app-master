import React from "react";
import logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <a href="/" className="auth-header">
      <div className="auth-header_logo">
        <img src={logo} alt="PNFT" />
      </div>
      <div className="auth-header_text">PNFT Market</div>
    </a>
  );
};
