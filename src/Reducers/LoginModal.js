const loadingReducer = (open, action) => {
    switch (action.type) {
      case "OPENED":
        return (open = true);
      case "CLOSED":
        return (open = false);
      default:
        return false;
    }
  };
  
  export default loadingReducer;