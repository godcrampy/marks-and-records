/* istanbul ignore file */

// ! This file exposes firebase config for running tests
// ! Don't import this files anywhere except in tests
import firebase from "firebase";
import firebaseConfig from "./config/firebase.config";

firebase.initializeApp(firebaseConfig);
