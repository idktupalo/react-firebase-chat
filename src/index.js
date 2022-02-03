import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAtgk43m5Klw4Sx78qDVaYdvUUYLarifrI",
  authDomain: "react-firebase-chat-e655e.firebaseapp.com",
  projectId: "react-firebase-chat-e655e",
  storageBucket: "react-firebase-chat-e655e.appspot.com",
  messagingSenderId: "696969889034",
  appId: "1:696969889034:web:14e7f13bd337eda8dee6f3",
  measurementId: "G-0Q3YC07601",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ firebase, auth, firestore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
