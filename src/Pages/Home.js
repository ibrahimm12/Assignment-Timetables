import { gql } from "@apollo/client";
import React from 'react'
import {useLazyQuery, useQuery} from "@apollo/client";
//import {GET_WEATHER_QUERY} from "../graphql/Queries";
//import {GET_ROUTES_QUERY} from "../graphql/Queries";
//(id: "HSL:1130113")
 const GET_ROUTES_QUERY = gql`
 query stops   {
  stops  (name: "Pohj. Rautatiekatu"){
    gtfsId
    name
    lat
    lon
    zoneId
    locationType
    vehicleMode
  }
}
 
 
 

  
`; 


    const Queries = () => {
        const {loading, error, data} = useQuery(GET_ROUTES_QUERY, {

        });


    if (loading) {
        return <div className = "loading-msg"> <h1>Loading..</h1></div>;
    };
    if (error) { return <h1>Error found</h1>;
    };

    
  
    return (
        <div className="list">
            <table className="pure-table pure-table-horizontal center">
                <thead>
                   <tr>
                       <th colSpan="67">
                           Route List
                       </th>
                       </tr> 
                       <tr>
                        <th> Stop-Id </th>
                        <th> Name </th>
                        <th> ZoneId </th>
                        <th> Longtude </th>
                        <th> Latitude </th>
                        <th> LocationType </th>
                        <th> VehicleMode </th>

                    </tr>


                </thead>
                <tbody>
                 {data.stops.map(stop => ( 
                            <tr key= {data.stop}>
                           <td> {stop.gtfsId} </td>
                            <td> {stop.name} </td> 
                            <td> {stop.zoneId} </td> 
                            <td> {stop.lon} </td>
                            <td> {stop.lat} </td>  
                            <td> {stop.locationType} </td>
                            <td> {stop.vehicleMode} </td>

                          
                        </tr>
                    ))}

                     
                </tbody>

            </table>
            

        </div>
    );
    
}
          
            
        
export default Queries;