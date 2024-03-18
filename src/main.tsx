import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router basename="/qencode-test/">
          <GoogleOAuthProvider clientId="631286bfccolkc.apps.googleusercontent.com">
            <App />
          </GoogleOAuthProvider>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
