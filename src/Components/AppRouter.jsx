import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
// import Notications from "../Pages/Notications";
import SubscriptionPage from "../Pages/SubscriptionPage";
import Register from "../Pages/RegisterCompany";
// import Profile from "../Pages/Profile";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage";
// import Board from "../Pages/Board";
// import Calendar from "../Pages/Calendar";
// import Staff from "../Pages/Staff";
import { useSelector } from "react-redux";
import LoginPage from "../Pages/LoginPage";
import PayPage from "../Pages/PayPage";
import AdminAuth from "../Pages/AdminAuth";
import Partners from "../Pages/Partners";
import AdminPage from "../Pages/AdminPage";

const AppRouter = () => {
  const isUserAuth = useSelector((state) => state.authReducer);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin-auth" element={<AdminAuth />} /> 
        <Route path="admin" element={<AdminPage />} /> 
        {!isUserAuth && (
          <>
            <Route path="login" element={<LoginPage />} />
          </>
        )}
        <Route path="partners" element={<Partners />} />
        <Route path="admin" element={<AdminAuth />} />
        <Route path="subs" element={<SubscriptionPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pay" element={<PayPage />} />
        <Route path="*" element={<ErrorPage />} />
        

        
        {/* <Route path="/notification" element={<Notications />} /> */}

        {/* <Route path="dashboard/:board" element={<Board />} />
        <Route path="staff" element={<Staff />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="profile" element={<Profile />} />
        <Route path="util" element={<Utilities />} /> */}

        
      </Routes>
    </>
  );
};

export default AppRouter;
