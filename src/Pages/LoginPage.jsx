import React, { useState, useEffect } from "react";
import { Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Actions";

const Login = () => {
  const isUserAuth = useSelector((state) => state.authReducer);
  const [userIsAth, setUserIsAuth] = useState(false);

  useEffect(() => {
    if (isUserAuth) {
      setUserIsAuth(true);
    }
  }, [isUserAuth]);

  const dispatch = useDispatch();
  const nav = useNavigate();

  const email = "demo@payroll.com";
  const password = "qwertyuiop";

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [show, setShow] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  let wrongPasswordCount = 0;

  const handleLoginRequest = (e) => {
    e.preventDefault();

    // console.log("faju");
    if (userEmail === "") {
      console.log("Empty E");
    }
    if (userPassword === "") {
      console.log("Empty P");
    }
    if (userEmail !== email) {
      console.log("Incorrect email");
    }
    if (userPassword !== password) {
      console.log("Incorrect Password");
      wrongPasswordCount = wrongPasswordCount + 1;
      console.log(wrongPasswordCount);
      if (wrongPasswordCount >= 3) {
        setShowForgotPassword(true);
      }
      if (wrongPasswordCount >= 5) {
        setShowForgotPassword(true);
      }
    }
    if (email === userEmail) {
      if (password === userPassword) {
        setShow(true);
        dispatch(login()) && nav("/dashboard");
      }
    }
  };

  //Check if user is already logged in

  return (
    <>
      {userIsAth ? (
        <>
          <div
            className="pay"
            style={{
              backgroundImage: `url("./dribbble_porta.gif")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <h2>You're Already Logged In</h2>
            <button onClick={() => nav("/dashboard")}>GO TO DASHBOARD</button>
            <button onClick={() => nav("/admin")}>GO TO THE ADMIN PAGE</button>
          </div>
        </>
      ) : (
        <>
          <div
            className="pay"
            style={{
              backgroundImage: `url("./dribbble_porta.gif")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <form action="/dashboard" className="form-control" id="login">
              <div className={show ? "" : "hide"}>
                <Alert>Login Sucessful. Redirecting..</Alert>
              </div>

              {wrongPasswordCount < 5 ? (
                <>
                  <div className={showForgotPassword ? "" : "hide"}>
                    <Alert severity="warning">
                      Try Resetting Your Password? OR Your Account Would Be
                      Blocked
                    </Alert>
                  </div>
                </>
              ) : (
                <>
                  <div className={showForgotPassword ? "" : "hide"}>
                    <Alert severity="warning">
                      Sccount has been blocked. Contact{" "}
                      <a href="mailto:helpdesk@payroll.com">
                        helpdesk@payroll.com
                      </a>
                    </Alert>
                  </div>
                </>
              )}

              <div>
                <span className="form-label" htmlFor="email">
                  E-mail
                </span>
                <br />
                {/* <label htmlFor="email">E-MAIL ADDRESS</label> */}
                <input
                  type="email"
                  required
                  id="email"
                  autoComplete="false"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>

              <div>
                <span className="form-label" htmlFor="password">
                  Password
                </span>
                <br />
                <input
                  type="password"
                  required
                  id="password"
                  placeholder="Password"
                  min="8"
                  minLength="8"
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </div>

              <div className={showForgotPassword ? "" : "hide"}>
                <p style={{ color: "navy" }}>Forgot Password?</p>
              </div>

              <button
                onKeyPress={(e) => {
                  console.log(e.key);
                  if (e.key === "ENTER") {
                    handleLoginRequest();
                  }
                }}
                onClick={handleLoginRequest}
              >
                Login
              </button>
            </form>

            <Link to="/register" style={{ color: "navy" }}>
              DON'T HAVE AN ACCOUNT, CLICK HERE
            </Link>

            <div className="paySecure">Secured</div>
          </div>
        </>
      )}
    </>
  );
};
export default Login;
