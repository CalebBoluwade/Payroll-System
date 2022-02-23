const themeReducer = (theme, action) => {
  switch (action.type) {
    case "LIGHT_THEME":
      return (theme = 0);
    case "DARK_THEME":
      return (theme = 1);
    case "AQUA_THEME":
      return (theme = 2);
    default:
      return (theme = 0);
  }
};

export default themeReducer;
