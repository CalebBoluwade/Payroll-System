import React, { useState } from "react";
import { Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Actions";

const Login = () => {
  const isAuth = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const loginButton = document.getElementById("login");

  const email = "demo@payroll.com";
  const password = "qwertyuiop";

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState();

  const handleLoginRequest = () => {
    if (userEmail && userPassword == ""){
      console.log("Empty");
    }
    //   if(userEmail !== email){
    //     console.log("Incorrect email");
    //   }

    // if(userPassword !== password){
    //   console.log("Incorrect Password");
    // }

    dispatch(login()) && nav("/dashboard");
  };

  return (
    <>
      <div className="main pay">
        <div className="pay">
          <div className="form-control">
          <Alert>Login Sucessful. Redirecting..</Alert>
            <label htmlFor="email">email</label>
            <input
              type="email"
              required
              id="email"
              placeholder="Email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <label htmlFor="email">password</label>
            <input
              type="password"
              required
              id="password"
              placeholder="Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />

            <button id="login" onClick={handleLoginRequest}>
              LOGIN
            </button>

            <p>
              IF YOU DONT HAVE AN ACCOUNT, CLICK <Link to="register">HERE</Link>{" "}
            </p>

            <div className="form-footer">powered by</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
