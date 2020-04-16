/* istanbul ignore file */

import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "firebase/auth";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

import App from "./App";
import firebaseConfig from "./config/firebase.config";
import { rootReducer } from "./store";

// @ts-ignore:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

firebase.initializeApp(firebaseConfig);
