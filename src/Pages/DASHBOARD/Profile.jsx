import React, { useState } from "react";
import { Alert, Skeleton } from "@mui/material";
import { NoteAdd, WrapText } from "@material-ui/icons";
import { TextField } from "@material-ui/core";

const Profile = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [company] = useState(false);

  const handleProfileChanges = () => {
    console.log(firstName, lastName, email);
    return <Alert severity="success">Changes Saved</Alert>;
  };

  const Auth = false;

  return (
    <div className="board">
      <div className="container">
        <div
          style={{
            width: 300,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="profile_image">
            {Auth ? (
              <img src="../Thf_1551875131.jpg" alt="profile_image" />
            ) : (
              <Skeleton variant="circular" height="100px" />
            )}
          </div>

          {Auth ? (
            <span>{firstName + "" + lastName}</span>
          ) : (
            <span>
              <Skeleton variant="text" width="180px" />
              <br />
              <Skeleton variant="text" width="100px" />
            </span>
          )}
        </div>

        <div style={{}}>
          <div className="user_item">
            <span>First Name:</span>
            <div
              className="text-box"
              contentEditable
              onChange={(e) => console.log(e)}
            >
              {firstName}
            </div>
            <WrapText />
          </div>
          <div className="user_item">
            <TextField
              variant="outlined"
              fullWidth
              label="First Name"
              name="fname"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="user_item">
            <span>Last Name:</span>
            <div
              className="text-box"
              contentEditable
              onChange={(e) => setLastName(e.target.value)}
            >
              {lastName}
            </div>
            <WrapText />
          </div>

          <div className="user_item">
            <span>Email Address:</span>
            <div
              className="text-box"
              contentEditable
              onChange={(e) => setEmail(e.target.value)}
            >
              {email}
            </div>
            <WrapText />
          </div>

          <div className="user_item">
            <span>Company Name</span>
            <div className="text-box">{company}</div>
            <WrapText />
          </div>
        </div>

        <button onClick={handleProfileChanges}>
          <NoteAdd /> Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
