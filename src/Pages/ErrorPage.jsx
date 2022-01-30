import React from "react";

const ErrorPage = () => {
  return (
    <>
      <div
        style={{
          height: "70vh",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="./404.svg" width={200} className="center" alt="" />
        <br />
      </div>
      <div></div>
      <h3 className="center">Page Doesn't Exist</h3>
    </>
  );
};

export default ErrorPage;
