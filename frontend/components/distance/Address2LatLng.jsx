import React, { useState, useEffect } from 'react';
import StoreService from '../../services/store.service';
function Address2LatLng(props) {
    const [content, setContent] = useState([]);
    const [data, setData] = useState([]);
    const key = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        const $script = document.createElement("script");
        $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false&libraries=services`;
        // console.log(process.env.NEXT_PUBLIC_KAKAOMAP_KEY);
        $script.addEventListener("load", () => setMapLoaded(true));
        document.head.appendChild($script);
      });

    useEffect(() => {
        StoreService.getAllStore().then(
            (res) => {
                setContent(res.data)
            },
            (error) => {
                console.log(error);
            }
        );
    }, [setContent]);

    useEffect(() => {
        if (!mapLoaded) return;

        kakao.maps.load(() => {

        var geocoder = new kakao.maps.services.Geocoder();
        { content && content.map((item) => {
            geocoder.addressSearch(`${item.address}`, (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    setData(data => [...data, {"id":`${item.id}`,coords }]);
                } 
            })
        })}
    });

    }, [content, mapLoaded, setData]);
    console.log({data});
    return (
        <div>
            
        </div>
    );
}

export default Address2LatLng;