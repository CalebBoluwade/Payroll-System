const loginReducer = (loggedIn = true, action) => {
  switch (action.type) {
    case "LOG_IN":
      return (loggedIn = true);
    case "LOG_OUT":
      return (loggedIn = false);
    default:
      return true;
  }
};

export default loginReducer;
