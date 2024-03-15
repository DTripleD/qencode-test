import { Link } from "react-router-dom";
import icons from "../images/icons.svg";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

import { loginn } from "../redux/operations";

const LoginPage = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const [isShown, setIsShown] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(e.target.elements.mail.value);

    dispatch(
      loginn({
        email: e.target.elements.mail.value,
        password: e.target.elements.password.value,
      })
    );
  };

  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  return (
    <div>
      <h2 className="title">Log in to your account</h2>
      <div className="log">
        <div className="login__btn__wrapper">
          <button onClick={login} className="login__with">
            <svg className="icon__service">
              <use href={icons + "#google"}></use>
            </svg>
            Google
          </button>
          <a
            className="login__with"
            //Сюда
            onClick={() => {}}
          >
            <svg className="icon__service">
              <use href={icons + "#github"}></use>
            </svg>
            Github
          </a>
        </div>
        <p className="variant">or</p>
        <form onSubmit={handleLogin} className="form">
          <label className="label email">
            <input type="text" placeholder="Work email" name="mail" />
          </label>
          <label className="label password">
            <input
              type={isShown ? "text" : "password"}
              placeholder="Password"
              name="password"
            />
            <svg
              className="icon__eye"
              onClick={() => setIsShown((prev) => !prev)}
            >
              <use href={icons + "#eye"}></use>
            </svg>
          </label>
          <Link to="/forgot" className="forgot">
            Forgot your password?
          </Link>
          <button type="submit" className="login__btn">
            Log in to Qencode
          </button>
          <p className="have_acc">
            Is your company new to Qencode?
            <Link to="/reset" className="span">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
