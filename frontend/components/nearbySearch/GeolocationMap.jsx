import { useEffect, useState } from "react";

export default function GeolocationMap() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const key = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;
  
  useEffect(() => {
    const $script = document.createElement("script");
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false&libraries=services`;
    console.log(process.env.NEXT_PUBLIC_KAKAOMAP_KEY);
    $script.addEventListener("load", () => setMapLoaded(true));
    document.head.appendChild($script);
  }, []);

  useEffect(() => {
    if (!mapLoaded) return;
    
    kakao.maps.load(() => {
        var container = document.getElementById('map');
        var options = {
                  center: new kakao.maps.LatLng(33.450701, 126.570667),
                  level: 3
              };
        var map = new kakao.maps.Map(container, options);

      // 사용자 위치에 마커 표시하기
      if (navigator.geolocation) {
        //사용자 위치를 geolocation.getCurrentPosition을 이용하여
        // latitude와 longitude를 받아온다.
        navigator.geolocation.getCurrentPosition((position) => {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;

          // locPosition에 latitude와 longitude를 center로 잡고, 지도의 확대 레벨을 저장한다.
          let locPosition = {
            center: new kakao.maps.LatLng(latitude, longitude),
            levle: 3,
          };
          //현 위치 좌표 화면에 출력
          //console.log(latitude, longitude)
          
          // 지도를 표시할 div와 지도 옵션으로 지도를 생성한다.
          var map = new kakao.maps.Map(container, locPosition);
          // 마커가 표시될 위치
          var markerPosition = new kakao.maps.LatLng(latitude, longitude);
          var marker = new kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
        });
      } else {
        let locPosition = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          levle: 3,
        };
        var map = new kakao.maps.Map(container, locPosition);
      }
  	});
    
 }),[mapLoaded];

return(

         <div id="map" style={{ width: "700px", height: "300px" }}>

         </div>
         
         
    )
}