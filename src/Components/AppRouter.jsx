import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../Pages/Home";
import Partners from "../Pages/Partners";
import ErrorPage from "../Pages/ErrorPage";

import SubscriptionPage from "../Pages/SubscriptionPage";

// import Profile from "../Pages/Profile";
import Contact from "../Pages/Contact";

//DASHBOARD
import Dashboard from "../Pages/DASHBOARD/Dashboard";
import Board from "../Pages/DASHBOARD/Board";
import Notification from "../Pages/DASHBOARD/Notification";
// import Calendar from "../Pages/Calendar";

// LOGIN AND SIGNUP
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/RegisterCompany";
import PayPage from "../Pages/PayPage";
// ADMIN
import AdminAuth from "../Pages/ADMIN/AdminAuth";
import Departments from "../Pages/ADMIN/Departments";
// import EmployeeProfile from "../Pages/EmployeeProfile";
import AdminPage from "../Pages/ADMIN/AdminPage";
import Employees from "../Pages/ADMIN/Employees";
import Transactions from "../Pages/ADMIN/Transactions";
import AdminPayments from "../Pages/ADMIN/AdminPayments";
import AdminSearch from "../Pages/ADMIN/AdminSearch";
import AdminFeedback from "../Pages/ADMIN/AdminFeedback";
import AdminPrefrences from "../Pages/ADMIN/AdminPrefrences";

const AppRouter = () => {
  const isUserAuth = useSelector((state) => state.authReducer);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        {/* DASHBOARD */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="board" element={<Board />} />
          <Route path="notifications" element={<Notification />} />
          {/* <Route path="calendar" element={<Calendar />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
        {/* ADMIN */}
        <Route path="admin" element={<AdminPage />}>
          <Route path="payments" element={<AdminPayments />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="departments" element={<Departments />} />
          <Route path="employee" element={<Employees />} />
          <Route path="search" element={<AdminSearch />} />
          <Route path="feedback" element={<AdminFeedback />} />
          <Route path="prefrences" element={<AdminPrefrences />} />
          {/* <Route path="employee:id" element={<EmployeeProfile />} /> */}
        </Route>
        <Route path="admin/auth" element={<AdminAuth />} />
        {!isUserAuth && (
          <>
            <Route path="login" element={<LoginPage />} />
          </>
        )}
        <Route path="partners" element={<Partners />} />
        <Route path="subs" element={<SubscriptionPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pay" element={<PayPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
