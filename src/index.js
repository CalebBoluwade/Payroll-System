import React from "react";
import ReactDOM from "react-dom";
// import "materialize-css/dist/css/materialize.min.css";
import "./index.css";
import AppRouter from "./Components/AppRouter";
import { createStore } from "redux";
import Reducers from "./Reducers/combinedReducers";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { BrowserRouter } from "react-router-dom";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistStore(store)}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
