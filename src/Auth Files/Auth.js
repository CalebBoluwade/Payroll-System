import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Actions";
import { useDispatch, useSelector } from "react-redux";

const Auth = () => {

  const navigate = useNavigate();
  const isUserAuth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const authUser = () => {
    if (isUserAuth) {
      dispatch(login());
    }

    if (!isUserAuth) {
      navigate("/login");
    }
  };

  return (
    <div>
      <Button onClick={authUser}>Authenticate</Button>
    </div>
  );
};

export const generateOTP = ({OTP}) => {
  const randomNum = Math.random() * 10000;;
  OTP = Math.floor(randomNum);

  return OTP;
};

export default Auth;
