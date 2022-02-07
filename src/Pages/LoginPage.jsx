import React, { useState } from "react";
import { Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Actions";

const Login = () => {
  const isAuth = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const email = "demo@payroll.com";
  const password = "qwertyuiop";

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleLoginRequest = () => {
    console.log("faju");
    if (userEmail && userPassword === "") {
      console.log("Empty");
    }
    //   if(userEmail !== email){
    //     console.log("Incorrect email");
    //   }

    // if(userPassword !== password){
    //   console.log("Incorrect Password");
    // }
    if (email === userEmail) {
      if (password === userPassword) {
        setShow(true);
        dispatch(login()) && nav("/dashboard");
      }
    }
  };

  return (
    <>
      <div className="aqua pay">
        <div className="form-control" id="login">
          <div className={show ? "" : "hide"}>
            <Alert>Login Sucessful. Redirecting..</Alert>
          </div>
          <div className="input-area">
            {/* <label htmlFor="email">E-MAIL ADDRESS</label> */}
            <input
              type="email"
              required
              id="email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="input-area">
            {/* <label htmlFor="password">PASSWORD</label> */}
            <input
              type="password"
              required
              id="password"
              placeholder="Password"
              min="8"
              minLength="8"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <div className="button-area">
            <button id="login" onClick={handleLoginRequest}>
              LOGIN
            </button>
          </div>

          <p className="form-text">
            DON'T HAVE AN ACCOUNT, CLICK <Link to="register">HERE</Link>
          </p>
        </div>
        <div className="paySecure">Secured</div>
      </div>

      <div className="welcome-banner">
        <img src="./image.gif" width={300} alt="" />
        <div className="center">
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
};
export default Login;
