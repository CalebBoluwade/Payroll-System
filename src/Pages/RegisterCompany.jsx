import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";

const Register = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [address, setAddress] = useState();
  const [country, setCountry] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const postNewUser = async (e) => {
    e.preventDefault();

    const newUser = {
      username: companyName,
      email: companyEmail,
      country: country,
      number: phoneNo,
      address: address,
      password: password,
      confirmPassword: confirmPassword,
    };

    console.log(newUser);

    const postUser = async () => {
      const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();
      console.log(data);
      return data;
    };

    postUser();
  };

  return (
    <Container component="main" maxWidth="sm">
      <form style={{ margin: "0px auto" }} noValidate>
        <Avatar className="center" style={{ margin: "0px auto" }}>
          <LockOutlined />
        </Avatar>
        <Typography className="center" component="h1" variant="h5">
          Sign Up
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Company's Name"
          name="name"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          onChange={(e) => setCompanyEmail(e.target.value)}
        />
        <Grid container>
          <Grid style={{ padding: 25 }} item xs={5}>
            <Select
              fullWidth
              name="country"
              label="Select Your Country"
              onChange={(e) => setCountry(e.target.value)}
            >
              <MenuItem>NG (+234)</MenuItem>
              <MenuItem>USA</MenuItem>
              <MenuItem>UK</MenuItem>
              <MenuItem>Canada</MenuItem>
            </Select>
          </Grid>
          <Grid item sm>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone No."
              name="phone"
              type="tel"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          required
          name="address"
          label="Address"
          type="text"
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Re-type Password"
          type="password"
          name="password2"
          autoComplete="current-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button
          type="submit"
          onClick={postNewUser}
          fullWidth
          variant="contained"
        >
          Create Account
        </Button>
        <Grid container>
          <Grid item xs>
            <Link variant="body2">{"Have an account? Click Here"}</Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Register;
