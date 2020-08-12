import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";
import "./index.css";

const domain = process.env.REACT_APP_YOUR_DOMAIN;
const clientId = process.env.REACT_APP_YOUR_CLIENT_ID;
const audience = process.env.REACT_APP_YOUR_AUDIENCE;

const onRedirectCallback = (appState) => {
  history.push(
    // appState && appState.returnTo
    // ? appState.returnTo
    // : window.location.pathname,
    "/dashboard"
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    aud={audience}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>,

  document.getElementById("root")
);