import React from "react";
import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
    <div className="main pay">
      <div
      >
        <img src="./404.svg" width={150} className="center" alt="" />
        <br />
      </div>
      <div className="center">CAN'T FIND YOUR WAY, FEELING LOST?
        <Link to="/">
          <img src="./smart-home-svgrepo-com.svg" alt="home" className="img" />
        </Link>
      </div>
      </div>
    </>
  );
};

export default ErrorPage;
