const authReducer = (authenticated, action) => {
  switch (action.type) {
    case "LOG_IN":
      return (authenticated = true);
    case "LOG_OUT":
      return (authenticated = false);
    default:
      return (authenticated = null);
  }
};

export default authReducer;
