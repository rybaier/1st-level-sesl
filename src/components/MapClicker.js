import React, { useEffect, useState } from "react";

const MapClicker = () => {
    const [geoLoc, SetGeoLoc] = useState()
    const [geoAvailable, SetGeoAvailable ] = useState(false)
useEffect(() => {
    if ("geolocation" in navigator) {
        console.log("Available")
        SetGeoAvailable(true)
    } else {
        console.log("unavailable")
    }
},[])    

    return(
        <h2> MapClicker</h2>
    )
}

export default MapClicker