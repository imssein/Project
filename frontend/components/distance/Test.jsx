import React, { useEffect, useState } from "react";
import axios from "axios";
import useGeolocation from "react-hook-geolocation";

function Test() {
  const geolocation = useGeolocation();
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  useEffect(() => {
    if (!geolocation.error) {
      axios
        .get(
            "https://dapi.kakao.com/v2/local/geo/transcoord.json?x=127.100611434725&y=37.5144273491608&input_coord=WGS84&output_coord=WTM",
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
  });

  return (
    <div>
      <p>식당 위경도 - wtm</p>
      <p>{x}</p>
      <p>{y}</p>
    </div>
  );
}

export default Test;
