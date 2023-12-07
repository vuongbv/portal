// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { BrowserCacheLocation, Configuration, LogLevel } from '@azure/msal-browser';



export const environment = {
    production: true,
    rootIot:'/api',
    rootShare:'/share',
    shareUrl: '',
    domainUrl: '',
    StrapiUrl: 'http://44.200.245.10:1337/api',
    signalRUrl: '/share',
    homeNusPanelId: '6397e103ab43b2c8261bd318',
    SignalrIotEndPoint:"/api/iot",
    TimeInSecond: 1209600,
    weatherUrl: 'https://api.weatherapi.com/v1',
    weatherApiKey: '7f823f3fb88d4e1eb0632343232203'
};

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
export const b2cPolicies = {
  names: {
      signUpSignIn: 'B2C_1_WiredgeSignin_DEV',

  },
  authorities: {
      signUpSignIn: {
          authority: 'https://wiredgeb2cdev.b2clogin.com/wiredgeb2cdev.onmicrosoft.com/B2C_1_WiredgeSignin_DEV',
      },

  },
  authorityDomain: 'wiredgeb2cdev.b2clogin.com',
};
/**
* Configuration object to be passed to MSAL instance on creation.
* For a full list of MSAL.js configuration parameters, visit:
* https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
*/
export const msalConfig: Configuration = {
  auth: {
      clientId: '2ef62688-6a9f-4a6e-a941-9599c647578b', // This is the ONLY mandatory field that you need to supply.
      authority: b2cPolicies.authorities.signUpSignIn.authority, // Defaults to "https://login.microsoftonline.com/common"
      knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
      redirectUri: '/', // Points to window.location.origin by default. You must register this URI on Azure portal/App Registration.
      postLogoutRedirectUri: '/auth', // Points to window.location.origin by default.
  },
  cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage, // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
      storeAuthStateInCookie: isIE, // Set this to "true" if you are having issues on IE11 or Edge. Remove this line to use Angular Universal
  },
  system: {
      /**
       * Below you can configure MSAL.js logs. For more information, visit:
       * https://docs.microsoft.com/azure/active-directory/develop/msal-logging-js
       */
      loggerOptions: {
          loggerCallback(logLevel: LogLevel, message: string) {
              console.log(message);
          },
          logLevel: LogLevel.Verbose,
          piiLoggingEnabled: false
      }
  }
}

/**
* Scopes you add here will be prompted for user consent during sign-in.
* By default, MSAL.js will add OIDC scopes (openid, profile) to any login request.
* For more information about OIDC scopes, visit:
* https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
*/
export const loginRequest = {
  scopes: ['https://wiredgeb2cdev.onmicrosoft.com/2ef62688-6a9f-4a6e-a941-9599c647578b/api']
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
