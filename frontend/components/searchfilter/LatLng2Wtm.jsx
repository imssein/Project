import React, { useEffect, useState } from "react";
import axios from "axios";
import useGeolocation from "react-hook-geolocation";

function LatLng2Wtm({content}) {
  const geolocation = useGeolocation();
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  useEffect(() => {
    if (!geolocation.error) {
      axios
        .get(
            `https://dapi.kakao.com/v2/local/geo/transcoord.json?x=${geolocation.longitude}&y=${geolocation.latitude}&input_coord=WGS84&output_coord=WTM`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
            },
          }
        )
        .then((result) => {
          setX(result.data.documents[0].x);
          setY(result.data.documents[0].y);
        });
    } else {
    }
  }, [geolocation.error, geolocation.latitude, geolocation.longitude, setX, setY]);

  return (
    <div>
      {/* <p>사용자 위경도 - wtm</p>
      <p>{x}</p>
      <p>{y}</p> */}
      {/* <RestaurantsList longitude={x} latitude={y} content={content} /> */}
      {/* <DistanceCalculator longitude={x} latitude={y} /> */}
    </div>
  );
}

export default LatLng2Wtm;
