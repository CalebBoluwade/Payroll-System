import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../Pages/Home";
import Partners from "../Pages/Partners";
import ErrorPage from "../Pages/ErrorPage";

import SubscriptionPage from "../Pages/SubscriptionPage";

import Contact from "../Pages/Contact";

//DASHBOARD
import Dashboard from "../Pages/DASHBOARD/Dashboard";
import Board from "../Pages/DASHBOARD/Board";
import Profile from "../Pages/DASHBOARD/Profile";
import Utilities from "../Pages/DASHBOARD/Utilities";
import Employeed from "../Pages/DASHBOARD/Employees";
import Notification from "../Pages/DASHBOARD/Notification";
import Calendar from "../Pages/DASHBOARD/Calendar";

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
import NeedHelp from "../Pages/ADMIN/NeedHelp";
import Receipts from "../Pages/Receipts";
import BusinessAnalytics from "../Pages/BusinessAnalytics";
import ChartJs from "../Pages/DASHBOARD/ChartJs";
import AdminOTP from "./AdminOTP";
import Mail from "../Pages/Mail";

const AppRouter = () => {
  const isUserAuth = useSelector((state) => state.authReducer);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        <Route path="receipt" element={<Receipts />} />
        <Route path="mail" element={<Mail />} />
        {/* DASHBOARD */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="board" element={<Board />}>
            <Route path="chart1" element={<ChartJs />} />
            <Route path="chart2" element={<Calendar />} />
            <Route path="chart3" element={<AdminOTP />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
          <Route path="buy-utilities" element={<Utilities />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="profile" element={<Profile />} />
          <Route path="employee" element={<Employeed />} />
        </Route>
        <Route path="bm-analytics" element={<BusinessAnalytics />} />
        {/* ADMIN */}
        <Route path="admin" element={<AdminPage />}>
          <Route path="payments" element={<AdminPayments />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="departments" element={<Departments />} />
          <Route path="employee" element={<Employees />} />
          <Route path="search" element={<AdminSearch />} />
          <Route path="feedback" element={<AdminFeedback />} />
          <Route path="prefrences" element={<AdminPrefrences />} />
          <Route path="help" element={<NeedHelp />} />
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
