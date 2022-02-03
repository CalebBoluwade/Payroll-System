import React from 'react';
import {ArrowForwardIos } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { logout } from "../Actions";
import { useDispatch } from "react-redux";

const AdminSidebar = ({openSideView}) => {
  const dispatch = useDispatch();
  return <>
      <div className={` admin-sidebar ${openSideView ? "hide" : ""}`}>
            <div>
              <img
                src="../Thf_1551875131.jpg"
                className="circle"
                alt="avatar_img"
              />
            </div>

<div className="admin-links">
            <Link to="departments">DEPARTMENTS</Link>
            <Link to="employee">EMPLOYEES</Link>
            <Link to="transactions">TRANS. HISTORY</Link>
            <Link to="payments">PAYMENTS</Link>
            </div>

<div className="center" style={{position: "absolute", bottom: 20, left: 20}}>
<img src="../power-button-power-svgrepo-com.svg" width={40} alt="Power Button" onClick={() => dispatch(logout())} />
</div>
        
          </div>
  </>;
};

export default AdminSidebar;
