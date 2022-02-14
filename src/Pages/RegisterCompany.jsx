import React, { useState } from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { CheckCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Register = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [address, setAddress] = useState();
  const [country, setCountry] = useState("");
  const [RCC, setRCC] = useState("");
  const [CAC, setCAC] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [useSignup, setUseSignup] = useState(false);
  const [response, setResponse] = useState(false);
  const [responseNote, setResponseNote] = useState(false);

  const isLoading = useSelector((state) => state.loadingReducer);

  const users = [
    { email: "demo@payroll.com" },
    { email: "admin@payroll.com" },
    { email: "customercare@payroll.com" },
    { email: "helpdesk@payroll.com" },
  ];

  const checkEmail = () => {
    console.log("ggjf");
    // users.find({ email: companyEmail }, (err, foundEmail) => {
    //   if (err) {
    //     console.log(err, "Email already exists");
    //   } else {
    //     if (foundEmail) {
    //       console.log("1");
    //     }
    //   }
    // });
  };

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
        address: address,
        country: country,
        rcc: RCC,
        cac: CAC,
        password: password,
        confirmPassword: confirmPassword,
      };

      try {
        const response = await fetch("http://localhost:8000/users", {
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
  };

  return (
    <>
      <div className="pay" id="register_page">
        <form className="form-control" id="register">
          <label htmlFor="name" className="form-label">
            Business Name
          </label>
          <input
            required
            id="company_name"
            label="name"
            type="text"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <label htmlFor="email" className="form-label">
            Business E-mail
          </label>
          <input
            required
            id="email"
            label="Email Address"
            name="email"
            type="email"
            onKeyDown={checkEmail()}
            onChange={(e) => setCompanyEmail(e.target.value)}
          />
          <label htmlFor="cac" className="form-label">
            Company Details
          </label>
          <div className="form-flex">
            <input
              required
              id="cac"
              label="CAC"
              name="cac"
              type="tel"
              placeholder="CAC"
              onChange={(e) => setCAC(e.target.value)}
            />
            <input
              required
              id="rcc"
              label="Phone No."
              name="phone"
              type="tel"
              placeholder="RCC"
              onChange={(e) => setRCC(e.target.value)}
            />
          </div>
          <label htmlFor="cac" className="form-label">
            Phone Number
          </label>
          <input
            required
            id="phone"
            label="Phone No."
            name="phone"
            type="tel"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <select
            name="country"
            label="Select Your Country"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>NGN (+234)</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
          </select>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="form-flex">
            <input
              required
              id="register-password"
              label="Password"
              type="password"
              name="password"
              minLength={8}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              id="repeat-password"
              label="Re-type Password"
              type="password"
              name="password2"
              minLength={8}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <input type="checkbox" name="" id="" />
          Agree to the Terms and Conditions.
          <button onClick={RegisterNew}>Sign-up</button>
        </form>
        <Link to="/login">Have an account? Click Here</Link>
      </div>

      <Dialog open={response} onClose={() => setResponse(false)}>
        <DialogContent>
          {response ? (
            <div>
              {responseNote ? (
                <>
                  {isLoading ? (
                    <>
                      <div className="center load">
                        <img
                          src="LOGO IDEA 1A.png"
                          alt="brand-logo"
                          className="site-logo"
                        />
                      </div>
                      <div style={{ textAlign: "center" }}>Loading...</div>
                    </>
                  ) : (
                    <div className="center">
                      <CheckCircle style={{ fontSize: 90, color: "#76C6C5" }} />{" "}
                      <br />
                      Registration Complete! Check Mail For Activation Code
                    </div>
                  )}
                </>
              ) : (
                // <Alert severity="success" id="alertanimation">
                //         Login Sucess! Redirecting...
                //       </Alert>
                <Alert severity="error">Passwords are not the Same.</Alert>
              )}
            </div>
          ) : (
            ""
          )}
        </DialogContent>
      </Dialog>
    </>
    // <Container component="main" maxWidth="sm">
    //   <form style={{ margin: "0px auto" }} noValidate>
    //     <Avatar className="center" style={{ margin: "0px auto" }}>
    //       <LockOutlined />
    //     </Avatar>
    //     <Typography className="center" component="h1" variant="h5">
    //       Sign Up
    //     </Typography>
    //

    //     <Grid container>
    //       <Grid style={{ padding: 25 }} item xs={5}>
    //         <Select
    //           fullWidth
    //           name="country"
    //           label="Select Your Country"
    //           onChange={(e) => setCountry(e.target.value)}
    //         >
    //           <MenuItem>NG (+234)</MenuItem>
    //           <MenuItem>USA</MenuItem>
    //           <MenuItem>UK</MenuItem>
    //           <MenuItem>Canada</MenuItem>
    //         </Select>
    //       </Grid>
    //       <Grid item sm>
    //
    //       </Grid>
    //     </Grid>
    //     <TextField
    //       fullWidth
    //       required
    //       name="address"
    //       label="Address"
    //       type="text"
    //       onChange={(e) => setAddress(e.target.value)}
    //     />

    //
    //     <Grid container>
    //       <Grid item xs>
    //
    //       </Grid>
    //     </Grid>
    //   </form>
    // </Container>
  );
};

export default Register;
