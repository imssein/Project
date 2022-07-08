import React, { useEffect, useState } from "react";
import NearbyRestaurant from "./NearbyRestaurant";

const datas = [
  {
    id: 0,
    district: "노원구",
    value: "nowon",
  },
  {
    id: 1,
    district: "금천구",
    value: "geumcheon",
  },
  {
    id: 2,
    district: "강서구",
    value: "gangseo",
  },
  {
    id: 3,
    district: "양천구",
    value: "yangcheon",
  },
  {
    id: 4,
    district: "도봉구",
    value: "dobong",
  },
  {
    id: 5,
    district: "강북구",
    value: "gangbuk",
  },
  {
    id: 6,
    district: "성북구",
    value: "seongbuk",
  },
  {
    id: 7,
    district: "동대문구",
    value: "dongdaemun",
  },
  {
    id: 8,
    district: "종로구",
    value: "jongro",
  },
  {
    id: 9,
    district: "중랑구",
    value: "jungnang",
  },
  {
    id: 10,
    district: "은평구",
    value: "eunpyeong",
  },
  {
    id: 11,
    district: "서대문구",
    value: "seodaemun",
  },
  {
    id: 12,
    district: "마포구",
    value: "mapo",
  },
  {
    id: 13,
    district: "광진구",
    value: "gwangjin",
  },
  {
    id: 14,
    district: "성동구",
    value: "seongdong",
  },
  {
    id: 15,
    district: "중구",
    value: "junggu",
  },
  {
    id: 16,
    district: "용산구",
    value: "yongsan",
  },
  {
    id: 17,
    district: "영등포구",
    value: "yeongdeungpo",
  },
  {
    id: 18,
    district: "강동구",
    value: "gangdong",
  },
  {
    id: 19,
    district: "송파구",
    value: "songpa",
  },
  {
    id: 20,
    district: "강남구",
    value: "gangnam",
  },
  {
    id: 21,
    district: "서초구",
    value: "seocho",
  },
  {
    id: 22,
    district: "동작구",
    value: "dongjak",
  },
  {
    id: 23,
    district: "관악구",
    value: "gwanak",
  },
  {
    id: 24,
    district: "구로구",
    value: "guro",
  },
];

function GeolocationParams({ district, longitude, latitude }) {
  const [params, setParams] = useState("");

  useEffect(() => {
    {
      datas.map((data) => {
        if (district === `${data.district}`) {
          setParams(`${data.value}`);
        }
      });
    }
  }, [district]);
  return (
    <div>
      <NearbyRestaurant
        params={params}
        latitude={latitude}
        longitude={longitude}
      />
    </div>
  );
}

export default GeolocationParams;
