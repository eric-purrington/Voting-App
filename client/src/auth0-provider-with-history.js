import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_YOUR_DOMAIN;
  const clientId = process.env.REACT_APP_YOUR_CLIENT_ID;
  const audience = process.env.REACT_APP_YOUR_AUDIENCE;

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    // history.push(appState?.returnTo || window.location.pathname);
    history.push("/dashboard");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      >
        {children}
      </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;