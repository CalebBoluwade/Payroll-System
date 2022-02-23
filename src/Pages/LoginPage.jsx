import React, { useState, useEffect } from "react";
import { Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Actions";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const Login = () => {
  const isUserAuth = useSelector((state) => state.authReducer);
  const [userIsAth, setUserIsAuth] = useState(false);

  useEffect(() => {
    if (isUserAuth) {
      setUserIsAuth(true);
    }
  }, [isUserAuth]);

  const isLoading = useSelector((state) => state.loadingReducer);

  const dispatch = useDispatch();
  const nav = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [datafromServer, setDatafromServer] = useState();
  const [serverResponse, setServerResponse] = useState();
  const [show, setShow] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  let wrongPasswordCount = 0;

  const Login = {
    email: userEmail,
    password: userPassword,
  };

  const sendLoginRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", Login);

      setDatafromServer(response);
      console.log(datafromServer);

      if (datafromServer.status === 200) {
        setServerResponse(datafromServer.data.message);
        console.log(datafromServer.data.message);
        setShow(true);
        dispatch(login()) && nav("/dashboard");
      }
    } catch (e) {
      console.log(e);
      // if (datafromServer.status == 401) {
      setServerResponse(datafromServer.data.message);
      console.log(datafromServer.data.message);
      // }
    }
    // setShow(true);
  };

  // const handleLoginRequest = (event) => {
  //   event.preventDefault();

  //   if (userEmail === "") {
  //     console.log("Empty E");
  //   }
  //   if (userPassword === "") {
  //     console.log("Empty P");
  //   }
  //   if (userEmail !== email) {
  //     console.log("Incorrect email");
  //   }
  //   if (userPassword !== password) {
  //     console.log("Incorrect Password");
  //     wrongPasswordCount = wrongPasswordCount + 1;
  //     console.log(wrongPasswordCount);
  //     if (wrongPasswordCount >= 3) {
  //       setShowForgotPassword(true);
  //     }
  //     if (wrongPasswordCount >= 5) {
  //       setShowForgotPassword(true);
  //     }
  //   }
  //
  // };

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
            <form
              className="form-control"
              id="login"
              onSubmit={sendLoginRequest}
            >
              <div className={show ? "hide" : ""}>
                <Alert>{serverResponse}</Alert>
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

              <button disabled={isLoading} onClick={sendLoginRequest}>
                {isLoading ? "Loading..." : "Login"}
              </button>
            </form>

            <Link to="/register" style={{ color: "navy" }}>
              DON'T HAVE AN ACCOUNT, CLICK HERE
            </Link>

            <div className="paySecure">Secured</div>

            <button>Fingerprint Login</button>
          </div>
        </>
      )}
    </>
  );
};
export default Login;
