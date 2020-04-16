import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "firebase/auth";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import firebaseConfig from "./config/firebase.config";
import { rootReducer } from "./store";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

firebase.initializeApp(firebaseConfig);
