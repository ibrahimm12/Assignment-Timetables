import { gql } from "@apollo/client";



 export const GET_ROUTES_QUERY = gql`
 query routes  {
  routes {
    gtfsId
    shortName
    longName
    mode
    }
 }
  
`; 

/* export const GET_WEATHER_QUERY = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      country
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`; */