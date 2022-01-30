export const login = () => {
  return {
    type: "LOG_IN",
  };
};

export const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

export const openLogin = () => {
  return {
    type: "OPENED",
  };
};

export const closeLogin = () => {
  return {
    type: "CLOSED",
  };
};

export const loading = () => {
  return {
    type: "LOADING",
  };
};

export const notLoading = () => {
  return {
    type: "!LOADING",
  };
};

export const darkTheme = () => {
  return {
    type: "DARK_THEME",
  };
};

export const lightTheme = () => {
  return {
    type: "LIGHT_THEME",
  };
};

export const aquaTheme = () => {
  return {
    type: "AQUA_THEME",
  };
};
