import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";
import axios from "axios";

const AdminOTP = ({ showOTP, setOTPDisplay }) => {
  const [OTP, setOTP] = useState(""); //Generated OTP
  const [userOTP, setUserOTP] = useState(""); //User Inputed OTP
  const isUserAuth = useSelector((state) => state.authReducer);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getOTP = async () => {
      try {
        const res = await axios.get("http://localhost:4000/otp");

        setOTP(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getOTP();
  }, []);

  const validateOTP = () => {
    if (userOTP !== OTP) {
      alert("OTP MISMATCH");
    }

    if (userOTP === OTP) {
      setShow(true);
      setTimeout(() => {
        if (isUserAuth) {
          navigate("/admin");
        }
        if (!isUserAuth) {
          navigate("/login");
        }
      }, 5000);
    }
  };

  const resetOTP = async () => {
    try {
      const res = await axios.get("http://localhost:4000/otp");

      setOTP(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/* <div className="otp-background"></div> */}
      <div className={`otp-background ${showOTP ? "" : "hide"}`}>
        <div className={show ? "" : "hide"}>
          <Alert>OTP Confirmed Sucessfully</Alert>
        </div>

        <h2 className="center">{OTP}</h2>
        <p className="center">Authenticate Admin</p>

        <div className="input-area">
          <label htmlFor="otp">ENTER OTP</label>
          <input
            type="text"
            required
            id="otp"
            min={6}
            step={3}
            max={6}
            required
            placeholder="Enter OTP"
            onChange={(e) => setUserOTP(e.target.value)}
          />
        </div>

        <button id="otp-button" onClick={validateOTP}>
          VERIFY OTP
        </button>
      </div>
      <p onClick={resetOTP}>Didn't receive OTP, resend it</p>
    </>
  );
};

export default AdminOTP;
