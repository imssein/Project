import React, { useRef, useEffect, useState } from "react";
import useSWR from "swr";
import District from "../seoulMap/District";

const fetcher = (...args) => fetch(...args).then((res) => res.json());


function NearbyRestaurant({ params, longitude, latitude }) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const key = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;
  const url = `http://localhost:9090/v1/api/stores/${params}`;

  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    const $script = document.createElement("script");
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false&libraries=services`;
    console.log(process.env.NEXT_PUBLIC_KAKAOMAP_KEY);
    $script.addEventListener("load", () => setMapLoaded(true));
    document.head.appendChild($script);
  });

  useEffect(() => {
    if (!mapLoaded) return;

    kakao.maps.load(() => {
      var container = document.getElementById("map");

      if (longitude && latitude) {
        var locPosition = {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: 5,
        };
        var map = new kakao.maps.Map(container, locPosition);
        var markerPosition = new kakao.maps.LatLng(latitude, longitude);
        var marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        // 주소-좌표 변환 객체를 생성한다.
        var geocoder = new kakao.maps.services.Geocoder();
        {
          data &&
            data.map((data) => {
              geocoder.addressSearch(`${data.address}`, (result, status) => {
                // 정상적으로 검색이 완료됐으면
                if (status === kakao.maps.services.Status.OK) {
                  var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                  // console.log(params, " 식당 출력 성공")
                  // 결과값으로 받은 위치를 마커로 표시
                  var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                  });
                }
              });
            });
        }
      } else {
        var locPosition = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          levle: 5,
        };
        var map = new kakao.maps.Map(container, locPosition);
      }
    });
  });

  return (
    <div>
      <div id="map" className="w-full h-80 mb-16"></div>
      <District params={params} />
    </div>
  );
}

export default NearbyRestaurant;
