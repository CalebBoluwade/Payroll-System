import React, { useState } from "react";
// import { Dialog, DialogContent } from "@material-ui/core";
// import Alert from "@mui/material/Alert";
// import { CheckCircle } from "@material-ui/icons";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTnC, setAcceptedTnC] = useState(false);
  const [canLogin, setCanLogin] = useState(false);

  const nav = useNavigate();

  // SERVER STATES
  const [dataLoading, setDataLoading] = useState(false);
  const [datafromServer, setDatafromServer] = useState();
  const [serverResponse, setServerResponse] = useState();

  const RegisterCompany = async (e) => {
    e.preventDefault();
    setDataLoading(true);

    const newCompany = {
      name: companyName,
      email: companyEmail,
      password: password,
      country: country,
      phoneNo: phoneNo,
      currencyDenom: "currencyDenom",
    };

    const verifiedData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/register",
          newCompany
        );

        // const data = await response.json();
        setDatafromServer(response);
        console.log(response);

        if (!dataLoading) {
          if (datafromServer.status === 200) {
            setServerResponse(datafromServer.data.message);
            console.log(datafromServer.data.message);
            // dispatch(login())
            nav("/dashboard");
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
    verifiedData();

    // if (confirmPassword === password) {
    if (companyName || companyEmail === "") {
      console.log("fields caco jo");
    } else {
    }
    // }
    //  else {
    //   console.log(password, confirmPassword);
    // }
  };

  return (
    <>
      <div className="pay" id="register_page">
        <form className="form-control" id="register">
          <p>{serverResponse}</p>
          <div>
            {/* <span htmlFor="name" className="form-label">
              Business Name
            </span> */}
            <TextField
              fullWidth
              required
              id="companyName"
              name="name"
              label="name"
              type="text"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div>
            <span htmlFor="email" className="form-label">
              Business E-mail
            </span>

            <input
              required
              id="email"
              label="Email Address"
              name="email"
              type="email"
              onChange={(e) => setCompanyEmail(e.target.value)}
            />
          </div>

          <fieldset className="flex-center">
            {/* <span htmlFor="password" className="form-label">
              Password
            </span> */}

            <input
              required
              id="register-password"
              label="Password"
              type="password"
              name="password"
              minLength={8}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* <span htmlFor="password" className="form-label">
              Retype-Password
            </span> */}
            <input
              required
              id="repeat-password"
              label="Re-type Password"
              type="password"
              name="password2"
              minLength={8}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </fieldset>

          <div style={{ display: "flex" }}>
            <select name="" id="">
              <option value="NGN">+234</option>
            </select>
            <div>
              <span className="form-label">Phone Number</span>
              <input
                required
                id="phone"
                label="Phone No."
                name="phone"
                type="tel"
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => setAcceptedTnC(!acceptedTnC)}
            />
            <span>
              Agree to the <Link to="/"> Terms and Conditions. </Link>
            </span>
          </div>

          <button disabled={canLogin} onClick={RegisterCompany}>
            Sign-up
          </button>
        </form>
        <Link to="/login">Have an account? Click Here</Link>
      </div>
    </>
  );
};

export default Register;
