import React, { useState, useEffect } from "react";
import DistanceLogo from "./DistanceLogo";

function DistanceRange({ distance }) {
  const [dist_1, setDist_1] = useState([]);
  const [dist_2, setDist_2] = useState([]);
  const [dist_3, setDist_3] = useState([]);
  const [dist_4, setDist_4] = useState([]);
  const [dist_5, setDist_5] = useState([]);
  const [dist_6, setDist_6] = useState([]);

  
  useEffect(() => {
    for (var i = 0; i < distance.length; i++) {
      // 300 / 500 / 1000 / 2000 / 3000 / 전체
      //console.log(distance[i].distance)
      if (distance[i].distance <= 300) {
        setDist_1((dist_1) => [
          ...dist_1,
          {
            distance: `${distance[i].distance}`,
            id: `${distance[i].id}`,
          },
        ]);
      } else if (distance[i].distance <= 500) {
        setDist_2((dist_2) => [
          ...dist_2,
          {
            distance: `${distance[i].distance}`,
            id: `${distance[i].id}`,
          },
        ]);
      } else if (distance[i].distance <= 1000) {
        setDist_3((dist_3) => [
          ...dist_3,
          {
            distance: `${distance[i].distance}`,
            id: `${distance[i].id}`,
          },
        ]);
      } else if (distance[i].distance <= 2000) {
        setDist_4((dist_4) => [
          ...dist_4,
          {
            distance: `${distance[i].distance}`,
            id: `${distance[i].id}`,
          },
        ]);
      } else if (distance[i].distance <= 3000) {
        setDist_5((dist_5) => [
          ...dist_5,
          {
            distance: `${distance[i].distance}`,
            id: `${distance[i].id}`,
          },
        ]);
      } else {
        setDist_6((dist_6) => [
          ...dist_6,
          {
            distance: `${distance[i].distance}`,
            id: `${distance[i].id}`,
          },
        ]);
      }
    }
  }, [distance]);

  // console.log({ dist_1 });
  // console.log({ dist_2 });
  // console.log({ dist_3 });
  // console.log({ dist_4 });


  return (
  <div> 
    <DistanceLogo dist_1={dist_1} dist_2={dist_2} dist_3={dist_3} dist_4={dist_4} dist_5={dist_5} dist_6={dist_6} />
  </div>
  )
}

export default DistanceRange;
