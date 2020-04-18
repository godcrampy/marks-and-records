/* istanbul ignore file */

import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "firebase/auth";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

import App from "./App";
import firebaseConfig from "./config/firebase.config";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store-spawn";

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

firebase.initializeApp(firebaseConfig);
