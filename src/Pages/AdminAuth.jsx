import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminAuth = () => {
  const [OTP, setOTP] = useState(""); //Generated OTP
  const [userOTP, setUserOTP] = useState(""); //User Inputed OTP
  const isUserAuth = useSelector((state) => state.authReducer);

  const navigate = useNavigate();

  useEffect(() => {
    const randomNum = Math.random() * 10000;

    setOTP(Math.floor(randomNum));
  },[]);

  console.log(OTP)
  const validateOTP = () => {
    
    if (userOTP !== OTP) {
      alert("OTP MISMATCH");
    }

    if (userOTP === OTP) {
      if (isUserAuth) {
        navigate("/dashboard");
      }
      if (!isUserAuth) {
        navigate("/login");
      }
    }
  };

  const resetOTP = () => {
    const randomNum = Math.random() * 10000;
    const Otp = Math.floor(randomNum);
  };

  return (
    <>
      <div className="main pay">
        <div className="pay">

          <div className="form-control">
            <label HtmlFor="otp">ENTER OTP</label>
            <input
              type="text"
              required
              id="otp"
              placeholder="Enter OTP"
              onChange={(e) => setUserOTP(e.target.value)}
            />

            <div className="button_area">
              <button onClick={validateOTP}>VERIFY OTP</button>
            </div>

            <h3>{OTP}</h3>

            <p onClick={() => resetOTP}>Didn't receive OTP, resend it</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAuth;
