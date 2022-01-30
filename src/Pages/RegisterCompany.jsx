import React, { useState } from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { CheckCircle } from "@material-ui/icons";
// import { Link } from "react-router-dom";
// import MenuItem from "@material-ui/core/MenuItem";

const Register = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [address, setAddress] = useState();
  const [country, setCountry] = useState("");
  const [rcc, setRCC] = useState("");
  const [taxID, setTaxID] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [useSignup, setUseSignup] = useState(false);
  const [response, setResponse] = useState(false);
  const [responseNote, setResponseNote] = useState(false);

  const isLoading = useSelector((state) => state.loadingReducer);
  const year = new Date();

  const postNewUser = async (e) => {
    e.preventDefault();

    const newUser = {
      Company_Name: companyName,
      Company_Email: companyEmail,
      Number: phoneNo,
      rcc: rcc,
      tax: taxID,
      password: password,
      confirmPassword: confirmPassword,
    };

    if (password === "") {
      const pass = document.getElementById("password");
      pass.setAttribute("disabled", true);
    }

    if (confirmPassword === password) {

      setResponse(true);
      setResponseNote(true);
      console.log(newUser);

      return newUser;
    }

    if (confirmPassword !== password) {
      setResponseNote(false);
    }

    const postUser = async () => {
      const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();
      console.log(data);
      return data;
    };

    postUser();
  };

  return (
    <>
      <div className="main pay">
        <div className="pay">
          <div className="form-control">
            <input
              type="text"
              required
              id="name"
              label="Company's Name"
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              required
              id="email"
              label="Email Address"
              name="email"
              type="email"
              onChange={(e) => setCompanyEmail(e.target.value)}
            />
            <button onClick={postNewUser}>Create Account</button>
            <div style={{ color: "#76C6C5" }}>
              <p className="center">
                <strong>{year.getFullYear()}. NEW WAVE SOLUTIONS.</strong>
              </p>
            </div>
          </div>
        </div>
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
    //         <TextField
    //           variant="outlined"
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="phone"
    //           label="Phone No."
    //           name="phone"
    //           type="tel"
    //           onChange={(e) => setPhoneNo(e.target.value)}
    //         />
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
    //     <TextField
    //       variant="outlined"
    //       margin="normal"
    //       required
    //       fullWidth
    //       id="password"
    //       label="Password"
    //       type="password"
    //       name="password"
    //       autoComplete="current-password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />

    //     <TextField
    //       variant="outlined"
    //       margin="normal"
    //       required
    //       fullWidth
    //       id="password"
    //       label="Re-type Password"
    //       type="password"
    //       name="password2"
    //       autoComplete="current-password"
    //       onChange={(e) => setConfirmPassword(e.target.value)}
    //     />

    //
    //     <Grid container>
    //       <Grid item xs>
    //         <Link variant="body2">{"Have an account? Click Here"}</Link>
    //       </Grid>
    //     </Grid>
    //   </form>
    // </Container>
  );
};

export default Register;
