// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const urlDev = 'https://127.0.0.1:80';
//const urlDev = 'https://www.visionpi-security.com';

export const environment = {
  production: false,
  apiUrl: urlDev,
  apiAuthentication: urlDev + '/auth/access_token',
  apiUsers: urlDev + '/v1/users',
  apiGeolocalization: urlDev + '/v1/geolocalization',
  apiSecurity: urlDev + '/v1/security',
  apiMonitoring: urlDev + '/v1/monitoring',
  apiAdministration: urlDev + '/api/administration',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
