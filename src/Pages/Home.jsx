import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactSupport from "../Components/Settings";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Alert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { CheckCircle } from "@material-ui/icons";

const Home = () => {
  const isLoading = useSelector((state) => state.loadingReducer);
  const dispatch = useDispatch();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [useSignup, setUseSignup] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [rcc, setRCC] = useState();
  const [taxID, setTaxID] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [response, setResponse] = useState(false);
  const [responseNote, setResponseNote] = useState(false);

  const year = new Date();

  //Register New Company
  const postNewUser = (e) => {
    e.preventDefault();

    if (password === "") {
      const pass = document.getElementById("password");
      pass.setAttribute("disabled", true);
    }

    if (confirmPassword === password) {
      const newUser = {
        Company_Name: companyName,
        Company_Email: companyEmail,
        Number: phoneNo,
        rcc: rcc,
        tax: taxID,
        password: password,
        confirmPassword: confirmPassword,
      };

      setResponse(true);
      setResponseNote(true);
      console.log(newUser);
    }

    if (confirmPassword !== password) {
      setResponseNote(false);
    }

    // const postUser = async () => {
    //   const response = await fetch("http://localhost:8000/users", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(newUser),
    //   });

    //   const data = await response.json();
    //   console.log(data);
    //   return data;
    // };

    // postUser();
  };

  return (
    <>
      <div style={{ position: "fixed", width: "100%" }}>
        <Header />
      </div>
      <div style={{ paddingTop: "77px", color: "#0a3838" }}>
        <div
          className="homedisplay"
          style={{
            backgroundImage: "url(../home/girl_3.gif)",
          }}
        >
          <h2 className="flow-text center" style={{ paddingTop: 50 }}>
            <strong>BUILT FOR EVERYONE</strong>
          </h2>
          <div>
            <div>
              <h6 className="flow-text center" style={{ paddingTop: 100 }}>
                <strong>WHY NOT LEAD THE CURVE</strong>,
                <br />
                <Button
                  variant="outlined"
                  onClick={() => setUseSignup(!useSignup)}
                >
                  Sign Up
                </Button>
                <strong> TODAY!</strong>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={useSignup} onClose={() => setUseSignup(false)}>
        <DialogTitle>
          <div className="center">
            <div style={{ display: "inline-flex" }}>
              <img
                src="LOGO IDEA 1A.png"
                alt="brand-logo"
                className="site-logo"
              />
            </div>
          </div>
          <div className="center" component="h1" variant="h5">
            <LockOutlined
              
              style={{ verticalAlign: "middle", fontSize: 32 }}
            />
            Sign Up
          </div>
        </DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Company's Name"
            name="name"
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Company's Email"
            name="name"
            onChange={(e) => setCompanyEmail(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            id="name"
            label="RCC Number"
            type="number"
            onChange={(e) => setRCC(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="name"
            label="Tax ID (TIN)"
            type="number"
            onChange={(e) => setTaxID(e.target.value)}
            style={{ float: "right" }}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone No."
            name="phone"
            type="tel"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="password"
            label="Password"
            type="password"
            name="password"
            style={{ float: "left" }}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            id="confirmpassword"
            label="Re-type Password"
            type="password"
            style={{ float: "right" }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <br />
          <br />

          <div className="center">
            <Button type="submit" onClick={postNewUser} variant="contained">
              Create Account
            </Button>
            <br />
            <br />
          </div>

          <div style={{ color: "#76C6C5" }}>
            <p className="center">
              <strong>{year.getFullYear()}. NEW WAVE SOLUTIONS.</strong>
            </p>
          </div>
        </DialogContent>
      </Dialog>
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

      <div className="home-slides">
        <div className="home-slide">
          <h2>
            WORK ANYWHERE.
            <div className="center">
              <strong>ANYTIME</strong>
            </div>
          </h2>
          {/* <img
            src="./home/pexels-anna-nekrashevich-68018732.jpg"
            alt="work-anywhere"
            className="slide-image"
          /> */}
          <img
            src="./home/study-work.svg"
            alt="work-anywhere"
            className="slide-image"
          />
        </div>

        <div className="home-slide">
          <h2>
            YOUR DAY-TO-DAY ANALYTICS.
            <div className="center">
              <strong>SIMPLIFIED</strong>
            </div>
          </h2>

          <img
            src="./home/pexels-lukas-669616.jpg"
            alt="work-anywhere"
            className="slide-image"
          />
        </div>

        <div>
          <h3>QUICK ONBOARDING PROCESS</h3>
          <h5>No hassle</h5>
        </div>
        {/* <div style={{ background: "#f0db4f" }}>
          <h3 className="center">Our Partners</h3>
          <div
            style={{
              padding: 15,
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <img src="../logo-javascript.png" alt="Partner1" width="75" />
            <img src="../react.png" alt="Partner2" width="75" />
            <img src="../github.png" alt="Partner3" width="75" />
          </div>
        </div> */}
      </div>
     
      <Footer />
    </>
  );
};

export default Home;
