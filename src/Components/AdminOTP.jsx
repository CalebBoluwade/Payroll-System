import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";

const AdminOTP = ({ showOTP, setOTPDisplay }) => {
  const [OTP, setOTP] = useState(""); //Generated OTP
  const [userOTP, setUserOTP] = useState(""); //User Inputed OTP
  const isUserAuth = useSelector((state) => state.authReducer);
  const [show, setShow] = useState(false);

  useEffect(() => {
    var NewOTP = () => {
      const randomNum = Math.random().toFixed(4).substring(2);
      setOTP(Math.floor(randomNum).toString());
    };
    NewOTP();
  }, []);

  const validateOTP = () => {
    if (userOTP !== OTP) {
      alert("OTP MISMATCH");
    }

    if (userOTP === OTP) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        setOTPDisplay(!showOTP);
      }, 4000);

      sessionStorage.setItem("last_admin_login", "eyrw");
    }
  };

  const sms = {
    sender: "New Wave Payroll",
    recipient: "08038220361",
    message: "Your One Time Password is" + OTP + "." + "Expires in x Minutes",
  };

  // const sendOTPsms = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://messaging.vtpass.com/v2/api/sms/sendsms",
  //       {
  //         method: "POST",
  //         headers: {
  //           "X-Token": "VT_PK_XXXXXXXXXXXXXXXXXXXXXXX",
  //           "X-Secret": "VT_SK_XXXXXXXXXXXXXXXXXXXXXX",
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //         body: JSON.stringify(sms),
  //       }
  //     );
  //     const data = await res.json();
  //     return data;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // sendOTPsms();

  // button.setAttribute("disabled", " ");

  return (
    <>
      {/* <div className="otp-background"></div> */}
      <div className={`otp-background ${showOTP ? "" : "hide"}`}>
        <div className="admin-otp">
          <div className={show ? "" : "hide"}>
            <Alert>OTP Confirmed Sucessfully</Alert>
          </div>

          <p className="center">Authenticate Admin</p>
          <div className="input-area">
            <label htmlFor="otp">ENTER OTP</label>
            <input
              type="text"
              required
              id="otp"
              min={4}
              step={3}
              required
              placeholder="Enter OTP"
              onChange={(e) => setUserOTP(e.target.value)}
            />
            <input type="password" required name="" id="" />
          </div>

          <button id="otp-button" onClick={validateOTP}>
            VERIFY OTP
          </button>

          <h3>{OTP}</h3>

          <button>Continue</button>
          {/* <p onClick={() => NewOTP()}>Didn't receive OTP, resend it</p> */}
        </div>
      </div>
    </>
  );
};

export default AdminOTP;
