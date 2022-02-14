import authReducer from "./AuthReducer";
import loadingReducer from "./LoadingReducer";
import themeReducer from "./ThemeReducers";
// import loginModal from "./LoginModal";
import { combineReducers } from "redux";

const Reducers = combineReducers({
  authReducer,
  loadingReducer,
  themeReducer,
  // loginModal,
});

export default Reducers;
