import React from "react";

const Footer = () => {
  const year = new Date();

  return (
    <footer
      style={{
        width: "100%",
        padding: 15,
        bottom: "100vh",
      }}
    >
      <div style={{ color: "#76C6C5" }}>
        <p className="center">
          {/* <img src="LOGO IDEA 1A.png" alt="brand-logo" width="30" />
          <br /> */}
          <span style={{ fontSize: 10 }}>
            COPYRIGHT &copy; {year.getFullYear()}.
          </span>
          <br />
          <strong>POWERED BY NEW WAVE SOLUTIONS</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
