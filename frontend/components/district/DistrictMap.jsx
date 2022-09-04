import React, { useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";
import RestaurantsList from "../nearbySearch/RestaurantsList";
import LatLng2Wtm from "../searchfilter/LatLng2Wtm";

function DistrictMap({districts, getDistricts}) {

  useEffect(() => {
    getDistricts();
  }, [getDistricts]);

  const geolocation = useGeolocation();
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
      var locPosition = {
        center: new kakao.maps.LatLng(
          geolocation.latitude,
          geolocation.longitude
        ),
        level: 7,
      };
      // 지도 생성
      var map = new kakao.maps.Map(container, locPosition);

      // 주소 좌표 변환 객체를 생성
      var geocoder = new kakao.maps.services.Geocoder();
      {
        districts &&
        districts.map((item) => {
            geocoder.addressSearch(`${item.address}`, (result, status) => {
              // 정상적으로 검색이 완료되었으면
              if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                // 결과값으로 받은 위치를 마커로 표시
                var marker = new kakao.maps.Marker({
                  map: map,
                  position: coords,
                });

                map.panTo(coords);
                marker.setMap(map);

                // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우 생성
                var iwContent = `
                      <a href="http://localhost:3000/restaurants/${item.id}">
                      <div style="height: 130px; width:300px; padding:15px; overflow: scroll;">
                        <div style="display:flex; ">
                        <div style="font-size:20px; overflow: hidden; white-space : nowrap; text-overflow : ellipsis;" >${item.name}</div>
                        <div style="font-size:20px; margin-left:10px; color:orange; ">${item.starRating}</div>
                        </div>
                        <div style="text-align:left; color:green;">${item.vegetarianTypes}</div>
                        <div style="text-align:left; display: flex; font-size:13px; color:gray;">
                        <div>${item.district}-${item.category}</div>
                        </div>
                        <div style="text-align:left; display:flex;">
                        <div style="font-size:13px; margin-right:5px;">✎</div>
                        <div style="font-size:13px; color:gray; margin-right:7px;">${item.reviewCount}</div>
                        <div style="font-size:13px; margin-right:5px; ">☆</div>
                        <div style="font-size:13px; color:gray;">${item.starRating}</div>
                        </div>
                      </div>
                      </a>`;
                var isRemoveable = true;
                // 인포윈도우를 생성
                var infowindow = new kakao.maps.InfoWindow({
                  content: iwContent,
                  removable: isRemoveable,
                });

                kakao.maps.event.addListener(marker, "click", function () {
                  infowindow.open(map, marker);
                  // infowindow.close();
                });
                
              
              }
            });
          });
      }
    });
  }, [geolocation.latitude, geolocation.longitude, mapLoaded, districts]);

  return (
    <div>
      <div id="map" className="w-full h-80 mb-16"></div>
      {/* <LatLng2Wtm content={content} /> */}
      {/* <RestaurantsList content={content} /> */}

    </div>
  );
}

export default DistrictMap;
