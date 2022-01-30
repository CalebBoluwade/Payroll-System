import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
    const isAuth = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  let email = "demo@payroll.com"

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState();

  const handleLoginRequest = (event) => {

    const sign_in = {
      email: userEmail,
      password: userPassword,
    };

    console.log(sign_in);
  };

  return (
  <>
    <div class="main pay">
    <div class="pay">
    <div className="form-control">
        <label htmlFor="email">email</label>
        <input type="email" required id="email" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} />
        <label htmlFor="email">password</label>
        <input type="password" required id="password" placeholder="Password" onChange={(e) => setUserEmail(e.target.value)}/>

        <button onClick={handleLoginRequest}>LOGIN</button>

        <p>IF YOU DONT HAVE AN ACCOUNT, CLICK <Link to="register">HERE</Link> </p>

        <div class="form-footer">
            powered by
        </div>
        </div>
</div>
</div>
</>
  )}
export default Login;
