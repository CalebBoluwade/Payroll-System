const authReducer = (auth, action) => {
  switch (action.type) {
    case "LOG_IN":
      return (auth = true);
    case "LOG_OUT":
      return (auth = false);
    default:
      return true;
  }
};

export default authReducer;
