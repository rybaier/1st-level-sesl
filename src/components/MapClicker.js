import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { BiCurrentLocation } from "react-icons/bi";
import {googleMapReact,} from "google-map-react";
import reverseGeocode from "latlng-to-zip";

const MapClicker = () => {
    const [geoLoc, SetGeoLoc] = useState({})
    const [geoAvailable, SetGeoAvailable ] = useState(false)
    const [totalLocations, SetTotalLocations] = useState([])
    const GOOGLEAPIKEY = process.env.GOOGLEAPIKEY

    const newLocation = () => {
        let newZip=reverseGeocode(geoLoc, GOOGLEAPIKEY)
        return newZip
    }

useEffect(() => {
    if ("geolocation" in navigator) {
        console.log("Available")
        SetGeoAvailable(true)
        getLocation()
    } else {
        console.log("unavailable")
    }
},[ ])    

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Latitude is:", position.coords.latitude)
            console.log("Longitude is:", position.coords.longitude)   
            SetGeoLoc({
                lat: position.coords.latitude,
                long: position.coords.longitude
            })
        })
      newLocation()
    }
    

    return(
        <div className="mapclicker">
           <h2> Add Your Location to the Locations Clicked</h2>
           <Button onClick={() => {console.log(geoLoc.lat, 'lat', geoLoc.long, 'long')}}><BiCurrentLocation size={'40px'}/> </Button>
           <div className="Map" style={{height:'100px', width: '50%'}}>
            {/* <googleMapReact>

            </googleMapReact> */}
           </div>
        </div>
    )
}

export default MapClicker