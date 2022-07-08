import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import GeolocationParams from "./GeolocationParams";

function GeolocationDistrict({ latitude, longitude }) {
  const [district, setDistrict] = useState("");
  
  useEffect(() => {
    if (longitude && latitude) {
      try{
      axios.get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
            },
          }
        )
        .then((result) => {
          setDistrict(result.data.documents[0].region_2depth_name);
        });
    } catch (error){
      console.log('Error');
    }
  }
    else {
    }
  },[longitude, latitude]);
  return (
    <div>
      <GeolocationParams
        district={district}
        latitude={latitude}
        longitude={longitude}
      />
    </div>
  );
}

export default GeolocationDistrict;
