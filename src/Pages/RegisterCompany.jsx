import React, { useState } from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { CheckCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [acceptedTnC, setAcceptedTnC] = useState(false);

  const [useSignup, setUseSignup] = useState(false);
  const [response, setResponse] = useState(false);
  const [responseNote, setResponseNote] = useState(false);

  const isLoading = useSelector((state) => state.loadingReducer);

  const RegisterNew = (e) => {
    e.preventDefault();
    // if (password === "") {
    //   const pass = document.getElementById("password");
    //   pass.setAttribute("disabled", true);
    // }

    // if (confirmPassword === password) {
    //   setResponse(true);
    //   setResponseNote(true);
    //   console.log(newUser);

    //   return newUser;
    // }

    // if (confirmPassword !== password) {
    //   setResponseNote(false);
    // }

    const RegisterCompany = async () => {
      const newCompany = {
        Company_Name: companyName,
        Company_Email: companyEmail,
        Number: phoneNo,
        password: password,
      };

      try {
        const response = await axios.post("http://localhost:4000/register", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newCompany),
        });

        const data = await response.json();
        console.log(data);
        return data;
      } catch (e) {
        console.log(e);
      }
    };
    RegisterCompany();
  };

  return (
    <>
      <div className="pay" id="register_page">
        <form className="form-control" id="register">
          <div>
          <span htmlFor="name" className="form-label">
            Business Name
          </span>
          <input
            required
            id="company_name"
            label="name"
            type="text"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          </div>

<div style={{display: "flex"}}>
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

          <div>
            <span htmlFor="password" className="form-label">
              Password
            </span>
          
              <input
                required
                id="register-password"
                label="Password"
                type="password"
                name="password"
                minLength={8}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span htmlFor="password" className="form-label">
                Retype-Password
              </span>
              <input
              required
                id="repeat-password"
                label="Re-type Password"
                type="password"
                name="password2"
                minLength={8}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
          
          </div>

          <div>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => setAcceptedTnC(!acceptedTnC)}
            />
            <span>
              {" "}
              Agree to the <Link to="/"> Terms and Conditions. </Link>
            </span>
          </div>

          <button disabled={acceptedTnC} onClick={RegisterNew}>Sign-up</button>
        </form>
        <Link to="/login">Have an account? Click Here</Link>
      </div>
    </>
  );
};

export default Register;
