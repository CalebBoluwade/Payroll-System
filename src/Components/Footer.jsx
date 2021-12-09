import React from "react";
import TextField from "@material-ui/core/TextField";

const Footer = () => {
  const year = new Date();

  return (
    <footer
      style={{
        color: "#fff",
        background: "linear-gradient(to left, #fff, lightskyblue, navy)",
        padding: 15,
        position: "relative",
        bottom: 0,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
        }}
      >
        <div style={{ width: "65%", padding: 10 }}>
          <ul>
            <li className="links">Home</li>
            <li className="links">About</li>
            <li className="links">Home</li>
            <li className="links">About</li>
          </ul>
        </div>

        <div
          style={{
            width: "35%",

            color: "navy",
            marginTop: 10,
            padding: 10,
          }}
        >
          <h6 className="flow-text">Sign up for Our Newsletter</h6>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
          />
        </div>
      </div>
      <div style={{ color: "navy" }}>
        <p className="center">
          <strong>Copyright &copy; {year.getFullYear()}</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
