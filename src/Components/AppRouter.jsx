import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import SubscriptionPage from "../Pages/SubscriptionPage";
import Register from "../Pages/RegisterCompany";
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
        </Route>
        <Route path="admin" element={<AdminPage />}>
          <Route path=":id" element={<EmployeeProfile />} />
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

        <Route path="calendar" element={<Calendar />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default AppRouter;
