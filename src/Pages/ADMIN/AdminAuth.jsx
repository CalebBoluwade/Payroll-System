import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";
import axios from "axios";

const AdminAuth = () => {
  const [OTP, setOTP] = useState(""); //Generated OTP
  const [userOTP, setUserOTP] = useState(""); //User Inputed OTP
  const isUserAuth = useSelector((state) => state.authReducer);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.loadingReducer);

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

  // const Button = document.getElementById("otp-button");
  // console.log(Button)
  //   Button.addEventListener("keydown", (e) =>{
  //     if (e.key == "enter"){
  // validateOTP()
  //     }
  //   })

  // const sms = {
  //   sender: "New Wave Payroll",
  //   recipient: "08038220361",
  //   message: "Your One Time Password is" + OTP + "." + "Expires in x Minutes",
  // };

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
      <div className="pay">
        <div className="form-control">
          <div className={show ? "" : "hide"}>
            <Alert>OTP Confirmed Sucessfully</Alert>
          </div>

          <p>OTP sent to your registered Phone Number</p>

          <label htmlFor="otp">ENTER OTP</label>
          <input
            type="text"
            required
            id="otp"
            placeholder="Enter OTP"
            minLength={4}
            maxLength={4}
            onChange={(e) => setUserOTP(e.target.value)}
          />

          <button id="otp-button" onClick={validateOTP}>
            VERIFY OTP
          </button>

          <h3>{OTP}</h3>

          {/* <p onClick={() => NewOTP()}>Didn't receive OTP, resend it</p> */}
        </div>
      </div>
    </>
  );
};

export default AdminAuth;
