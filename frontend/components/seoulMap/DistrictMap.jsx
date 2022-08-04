import React, { useRef, useEffect, useState } from "react";
import useSWR from "swr";
import District from "../seoulMap/District";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function DistrictMap({ params }) {
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
      var locPosition = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 7,
      };
      // 지도 생성
      var map = new kakao.maps.Map(container, locPosition);

      // 주소-좌표 변환 객체를 생성한다.
      var geocoder = new kakao.maps.services.Geocoder();
      {
        data &&
          data.map((data) => {
            geocoder.addressSearch(`${data.address}`, (result, status) => {
              // 정상적으로 검색이 완료됐으면
              if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                console.log(params, " 식당 출력 성공");
                // 결과값으로 받은 위치를 마커로 표시
                var marker = new kakao.maps.Marker({
                  map: map,
                  position: coords,
                });
                // 지도 중심 이동
                map.panTo(coords);
                marker.setMap(map);
              }
            });
          });
      }
    });
  });

  return (
    <div>
      <div id="map" className="w-full h-80 mb-16"></div>
    </div>
  );
}

export default DistrictMap;
