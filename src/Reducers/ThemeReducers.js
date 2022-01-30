const themeReducer = (darkTheme = 0, action) => {
    switch (action.type) {
      case "LIGHT_THEME":
      return 0;
      case "DARK_THEME":
        return 1;
        case "AQUA_THEME":
        return 2;
      default:
        return 0;
    }
  };
  
  export default themeReducer;