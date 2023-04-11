import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { BiCurrentLocation } from "react-icons/bi";


const MapClicker = () => {
    const [geoLoc, SetGeoLoc] = useState({})
    const [geoAvailable, SetGeoAvailable ] = useState(false)


useEffect(() => {
    if ("geolocation" in navigator) {
        console.log("Available")
        SetGeoAvailable(true)
        getLocation()
    } else {
        console.log("unavailable")
    }
},[])    

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Latitude is:", position.coords.latitude)
            console.log("Longitude is:", position.coords.longitude)   
            SetGeoLoc({
                lat: position.coords.latitude,
                long: position.coords.longitude
            })
            console.log(geoLoc)
        })
        console.log(geoLoc)
    }
    return(
        <div className="mapclicker">
           <h2> Add Your Location to the Locations Clicked</h2>
           <Button onClick={() => {getLocation()}}><BiCurrentLocation size={'40px'}/> </Button>
        </div>
    )
}

export default MapClicker