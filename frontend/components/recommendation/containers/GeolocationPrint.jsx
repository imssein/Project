import React, { useEffect, useState } from "react";
import axios from "axios";
import useGeolocation from "react-hook-geolocation";
import GeolocationParams from "./GeolocationParams";

function GeolocationPrint(props) {
    const geolocation = useGeolocation();
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("");
    
  // 내 위치 좌표 -> 주소, 자치구명 
    useEffect(() => {
    if (geolocation.longitude && geolocation.latitude) {
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
        console.log("geoclocation error")
    }
    });
    return (
        <div>
            <GeolocationParams district={district} />
        </div>
    );
}

export default GeolocationPrint;