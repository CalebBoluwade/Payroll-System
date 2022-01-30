import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Notications from "../Pages/Notications";
import Pricing from "../Pages/Pricing";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage";
import Board from "../Pages/Board";
import Calendar from "../Pages/Calendar";
import Staff from "../Pages/Staff";
import { useSelector } from "react-redux";
import LoginPage from "../Pages/LoginPage";
import Utilities from "./Utilities";
import PayPage from "../Pages/PayPage";
import AdminAuth from "../Pages/AdminAuth";

const AppRouter = () => {
  const isUserAuth = useSelector((state) => state.authReducer);
  // const navigate = useNavigate();

  // if (isUserAuth) {
  //   navigate("/login");
  // }
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="sign-in" element={<LoginPage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pay" element={<PayPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="admin" element={<AdminAuth />} />

        {/* <Route path="/register" element={<Register />} />
        <Route path="/notification" element={<Notications />} /> */}

        {isUserAuth ? (
          <>
            <Route path="dashboard" element={<Dashboard />} />
          </>
        ) : (
          <>
            <Route path="login" element={<LoginPage />} />
          </>
        )}

        <Route path="dashboard/:board" element={<Board />} />
        <Route path="staff" element={<Staff />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="profile" element={<Profile />} />
        <Route path="util" element={<Utilities />} />

        
      </Routes>
    </>
  );
};

export default AppRouter;
