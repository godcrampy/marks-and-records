/* istanbul ignore file */

import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "firebase/auth";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import App from "./App";
import firebaseConfig from "./config/firebase.config";
import { rootReducer } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// @ts-ignore:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers());

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
