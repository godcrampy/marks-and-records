import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "firebase/auth";

import App from "./App";
import firebaseConfig from "./config/firebase.config";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

firebase.initializeApp(firebaseConfig);
