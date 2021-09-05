## Endpoint

The routing API for Helsinki region is available at:
https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql

## Used query from Helsinki Regional Transport (HSL) open data interface. StopId (HSL:1130113)

* stops   {
*  stops  (name: "Pohj. Rautatiekatu"){
 *   gtfsId
  *  name
   * lat
   * lon
   * zoneId
   * locationType
   * vehicleMode
*  }
* }

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

