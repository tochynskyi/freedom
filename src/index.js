import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App/App";
import {
  FirebaseAppProvider,
  AuthProvider,
  FirestoreProvider,
} from "reactfire";
import { BrowserRouter as Router } from "react-router-dom";
import { auth, firebaseApp, firestoreDatabase } from "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseApp={firebaseApp}>
      <AuthProvider sdk={auth}>
        <FirestoreProvider sdk={firestoreDatabase}>
          <Router>
            <App />
          </Router>
        </FirestoreProvider>
      </AuthProvider>
    </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
