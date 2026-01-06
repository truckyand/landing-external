import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "c73b2500-5f95-4b40-a401-3f355dee9b4b",
    authority: "https://login.microsoftonline.com/46af71ce-1150-4682-8023-6413fce8a42a",
    redirectUri: "https://truckyand.github.io/landing-external"
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (!containsPii) console.log(message);
      },
      logLevel: LogLevel.Info
    }
  }
};

export const loginRequest = {
  scopes: ["User.Read"]
};
