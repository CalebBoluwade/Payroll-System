import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "materialize-css/dist/css/materialize.min.css";
import AppRouter from "./Components/AppRouter";
import { createStore } from "redux";
import Reducers from "./Reducers/combinedReducers";
import { Provider } from "react-redux";

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
