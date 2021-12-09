import { useState, useEffect } from "react";

const [users, setUsers] = useState();
const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  const getUsers = async () => {
    const profiles = await fetchUsers();
    setUsers([...profiles]);
  };

  getUsers();
}, []);

const fetchUsers = async () => {
  const response = await fetch("http://localhost:5000/companies");
  const data = await response.json();
  setLoading(false);
  return data;
};

const [isAuth, setIsAuth] = useState(false);

function isAuthenticated({ email, password }) {
  setIsAuth(true);
}
