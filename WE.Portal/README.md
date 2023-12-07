# ShareServicePortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## library 
- `@katoid/angular-grid-layout` Angular Grid Layout is a grid layout system with draggable and resizable items for Angular Applications. It is mainly designed to create highly customizable dashboards. https://github.com/katoid/angular-grid-layout
- `@microsoft/signalr` signalr https://www.npmjs.com/package/@microsoft/signalr
- `leaflet`, `leaflet-draw`, `leaflet-search`,  `@types/leaflet-draw` open street map https://leafletjs.com/
- `angular-highcharts`, `highcharts` higchart  is lib user draw chart https://www.highcharts.com/
- `moment` lib use datetime format
- `ng-openapi-gen` lib use gen service and model from swagger https://www.npmjs.com/package/ng-openapi-gen
- `ngx-clipboard` lib use copy value to clipboard
- `ngx-powerbi` lib use add power bi to panel https://www.npmjs.com/package/ngx-powerbi
-  `ngx-ui-loader` lib use add loadding https://www.npmjs.com/package/ngx-ui-loader
- `primeflex` PrimeFlex is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well.https://www.primefaces.org/primeflex/
- `primeng` Angular UI Component Library https://primeng.org/installation

## enviroment 


`set up environment in app`

export const environment = {
    production: true,
    rootIot:'/api',
    rootShare:'/share',
    shareUrl: `Share module api`,
    domainUrl:`IOT module api`,
    StrapiUrl: `Strapi api `,
    signalRUrl: '/share', `signalR path share service`
    SignalrIotEndPoint:"/api/iot"  `end point signalr iot service`,
    TimeInSecond: 3600,  `time check action in view, if not action app auto logout`
    weatherUrl: 'https://api.weatherapi.com/v1', `api get weather `
    weatherApiKey: '7f823f3fb88d4e1eb0632343232203'` key weather api`
};


`Configure authentication in a sample Angular SPA by using Azure Active Directory B2C https://github.com/MicrosoftDocs/azure-docs/blob/main/articles/active-directory-b2c/configure-authentication-sample-angular-spa-app.md`


const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
export const b2cPolicies = {
  names: {
      signUpSignIn: 'B2C_1_uf_signin_and_signup',

  },
  authorities: {
      signUpSignIn: {
          authority: 'https://gtechdev.b2clogin.com/gtechdev.onmicrosoft.com/B2C_1_uf_signin_and_signup',
      },

  },
  authorityDomain: 'gtechdev.b2clogin.com',
};

`
* Configuration object to be passed to MSAL instance on creation.
* For a full list of MSAL.js configuration parameters, visit:
* https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
`
export const msalConfig: Configuration = {
  auth: {
      clientId: '74813789-c207-45c7-8f02-80e546c18e0c', // This is the ONLY mandatory field that you need to supply.
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
  scopes: ['https://gtechdev.onmicrosoft.com/74813789-c207-45c7-8f02-80e546c18e0c/api']
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
Run `ng build --configuration dev` to build the project with dev environment. The build artifacts will be stored in the `dist/` directory.

Run `ng build --configuration staging` to build the project with staging environment. The build artifacts will be stored in the `dist/` directory.
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

 To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
