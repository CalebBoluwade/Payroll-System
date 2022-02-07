import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import SubscriptionPage from "../Pages/SubscriptionPage";
import Register from "../Pages/RegisterCompany";
import Departments from "../Pages/Departments";
import EmployeeProfile from "../Pages/EmployeeProfile";
import Profile from "../Pages/Profile";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage";
import Board from "../Pages/Board";
import Calendar from "../Pages/Calendar";
import { useSelector } from "react-redux";
import LoginPage from "../Pages/LoginPage";
import PayPage from "../Pages/PayPage";
import AdminAuth from "../Pages/AdminAuth";
import Partners from "../Pages/Partners";
import AdminPage from "../Pages/AdminPage";
import Employees from "../Pages/Employees";
import Transactions from "../Pages/Transactions";
import AdminPayments from "../Pages/AdminPayments";
import AdminSearch from "../Pages/AdminSearch";
import AdminFeedback from "../Pages/AdminFeedback";
import Notifications from "../Pages/Notifications";

const AppRouter = () => {
  const isUserAuth = useSelector((state) => state.authReducer);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="board" element={<Board />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="admin" element={<AdminPage />}>
          <Route path="payments" element={<AdminPayments />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="departments" element={<Departments />} />
          <Route path="employee" element={<Employees />} />
          <Route path="search" element={<AdminSearch />} />
          <Route path="feedback" element={<AdminFeedback />} />
          <Route path="notifications" element={<Notifications />} />
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
