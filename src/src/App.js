import React from "react";
import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate
} from "@azure/msal-react";

function App() {
  const { instance, accounts } = useMsal();
  const account_info = JSON.stringify(accounts[0], null, 2);

  const handleLogin = () => {
    instance.loginPopup();
  };

  const handleLogout = () => {
    instance.logoutPopup();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Entra ID Login (React)</h2>

      <UnauthenticatedTemplate>
        <button onClick={handleLogin}>Sign in</button>
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        <p>Welcome: {accounts[0]?.username}</p>
        <p>DEBUG: {account_info}</p>
        <button onClick={handleLogout}>Sign out</button>
      </AuthenticatedTemplate>
    </div>
  );
}

export default App;
