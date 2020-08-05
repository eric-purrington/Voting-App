import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

const YOUR_DOMAIN = process.env.REACT_APP_YOUR_DOMAIN;
const YOUR_CLIENT_ID = process.env.REACT_APP_YOUR_CLIENT_ID;
console.log(YOUR_DOMAIN);
console.log(YOUR_CLIENT_ID);

ReactDOM.render(
  <Auth0Provider
    domain={YOUR_DOMAIN}
    client_id={YOUR_CLIENT_ID}
    redirect_uri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);