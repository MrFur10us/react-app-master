import React, { useState } from "react";
import show from "../assets/show.svg";
import clear from "../assets/clear.svg";
import google from "../assets/google.svg";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const changePasswordShow = () => {
    setPasswordShow((e) => !e)
  }
  return (
    <div className="auth-form">
      <div className="form__title">NFT Access</div>
      <div className="form__text">
        Please fill your detail to access your account.
      </div>
      <div className="email__text">Email</div>
      {/* [(ngModel)]="inputText" */}
      <input
        className="email__input"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      {/* (click)="inputText = ''" */}
      <span onClick={() => setEmail('')}>
        <img src={clear} alt="" />
      </span>
      <div className="password__text">
        Password
      </div>
      <input type= {passwordShow ? 'text' : 'password'}
        // [type]="passwordShow ? 'password' : 'text'"
        placeholder="Enter your password"
        className="email__input"
      />
      {/* (click)="passwordShow = !passwordShow" */}
      <span onClick={changePasswordShow}>
        <img src={show} alt="" />
      </span>
      <div className="afterWords">
        <label className="chk">
          <input className="chk__input" type="checkbox" />
          <span className="chk__check"></span>
          <span className="chk__text">Remember me</span>
        </label>
        <a href="/" className="second__word">
          Forgot Password?
        </a>
      </div>
      <div className="btns">
        <a href="/" className="btn sign__btn">
          Sign in
        </a>
        <a href="/" className="btn google__btn">
          <img src={google} alt="" />
          Sign in with Google
        </a>
      </div>
      <div className="after__text">
        Don’t have an account? <a href="/">Sign up</a>
      </div>
    </div>
  );
};
