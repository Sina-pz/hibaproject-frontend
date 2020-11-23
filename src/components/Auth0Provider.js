import React from "react";
import { Auth0Provider,useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const CheckAuth = ({children})=>{
    const { isLoading } = useAuth0();
    console.log ({isLoading});
    if (isLoading) {
      return <div>LodingAuthentication</div>
    }
    return children;
}
const Auth0ProviderUser = ({ children }) => {
    const history = useHistory();

    const onRedirectCallback = (appState) => {
      history.push(appState?.returnTo || window.location.pathname);
    };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <CheckAuth>{children}</CheckAuth>
    </Auth0Provider>
  );
};

export default Auth0ProviderUser;
