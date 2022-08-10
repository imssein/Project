import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillGeoAltFill } from "react-icons/bs";
import useGeolocation from "react-hook-geolocation";
import GeolocationParams from "./GeolocationParams";

function GeolocationPrint() {
  const geolocation = useGeolocation();

  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");

  useEffect(() => {
    if (!geolocation.error) {
      axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${geolocation.longitude}&y=${geolocation.latitude}`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
            },
          }
        )
        .then((result) => {
          setAddress(result.data.documents[0].address_name);
          setDistrict(result.data.documents[0].region_2depth_name);
        });
    } else {
    }
  });

  return (
    <div className="w-full">
      <div className="flex my-6 justify-end">
        <BsFillGeoAltFill size="20" className="mr-2" />
        <p className="font-medium">내 위치 : {address}</p>
      </div>
      <GeolocationParams district={district} />
    </div>
  );
}

export default GeolocationPrint;
