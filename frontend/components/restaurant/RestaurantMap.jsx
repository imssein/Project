import { useEffect, useState } from "react";

function RestaurantMap({ content }) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const key = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;

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
      var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3, // 지도의 확대 레벨
      };
      // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다.
      var map = new kakao.maps.Map(container, options);

      // 주소-좌표 변환 객체를 생성한다.
      var geocoder = new kakao.maps.services.Geocoder();
          geocoder.addressSearch(`${content.address}`, (result, status) => {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
              var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

              // 결과값으로 받은 위치를 마커로 표시
              var marker = new kakao.maps.Marker({
                map: map,
                position: coords,
              });
              // console.log(`${data.id}`);
              // console.log(`${data.address}`)

              map.setCenter(coords);
            }
          });
        });
      }, [content, mapLoaded]);

  return (
    <div>
      <div id="map" className="w-full h-72"></div>
    </div>
  );
}

export default RestaurantMap;
