import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import LockOutlined from "@material-ui/icons/LockOutlined";

const popup = (props) => {
  const { title, children, OpenPopup, setOpenPopup } = props;

  return (
    <Dialog open={OpenPopup} onClose={() => setOpenPopup(false)}>
      <DialogTitle>
        <Avatar>
          <LockOutlined className="center" />
        </Avatar>
        <Typography className="center" component="h1" variant="h5">
          Sign in
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Container component="main" maxWidth="xs">
          <form
            action="/dashboard"
            method="GET"
            className="form-control"
            style={{ margin: "0px auto" }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="email"
            />

            <FormControlLabel
              control={<Checkbox value="remember" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained">
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link variant="body2">Forgot Password?</Link>
              </Grid>

              <Grid item xs>
                <Link variant="body2">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default popup;
