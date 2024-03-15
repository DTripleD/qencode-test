import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="631286612386-jr3ks0phd3pe97njd5241peobfccolkc.apps.googleusercontent.com">
        <Router basename="/">
          <App />
        </Router>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
