import React, { useEffect, useState } from "react";
import GeolocationDistrict from "./GeolocationDistrict";
import GeolocationPrint from "./GeolocationPrint";

function Geolocation() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(latitude, longitude);
      });
    }
  }, [latitude, longitude]);
  return (
    <div className="">
    <GeolocationPrint latitude={latitude} longitude={longitude} />
      <GeolocationDistrict latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default Geolocation;
