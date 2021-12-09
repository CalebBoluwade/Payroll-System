import React, { useState, useEffect } from "react";
import Header from "./Header";
import { UserContext } from "./UserContext";

const UserState = (props) => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getProfile = async () => {
      const profiles = await fetchProfile();
      setProfile([...profiles]);
    };

    getProfile();
  }, []);

  const fetchProfile = async () => {
    const response = await fetch("http://localhost:5000/companies");
    const data = await response.json();
    setLoading(false);
    return data;
  };

  return (
    <UserContext.Provider
      value={(profile, setProfile, isAuth, setIsAuth, loading, setLoading)}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
