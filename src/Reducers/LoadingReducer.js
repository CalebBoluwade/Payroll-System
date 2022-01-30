const loadingReducer = (loading, action) => {
  switch (action.type) {
    case "LOADING":
      return (loading = true);
    case "!LOADING":
      return (loading = false);
    default:
      return false;
  }
};

export default loadingReducer;
