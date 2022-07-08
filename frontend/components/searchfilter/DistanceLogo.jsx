import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
const datas = [
  {
    id: 1,
    title: "100m",
  },
  {
    id: 2,
    title: "200m",
  },
  {
    id: 3,
    title: "300m",
  },
  {
    id: 4,
    title: "400m",
  },
  {
    id: 5,
    title: "500m",
  },
  {
    id: 6,
    title: "1km",
  },
  {
    id: 7,
    title: "2km",
  },
  {
    id: 8,
    title: "3km",
  },
  {
    id: 9,
    title: "전체",
  },
];
function DistanceLogo(props) {
  return (
    // <div className="my-6 grid grid-cols-5 gap-2 md:grid-cols-9 md:gap-2">
    //   {datas.map((data) => (
    //     <div key={data.id}> 
    //       <button className="bg-stone-200 py-2 px-3 text-center w-16">{data.title}</button>
    //     </div>
    //   ))}
    // </div>
    <div className="flex rounded-full bg-slate-200 py-2 px-3">
        <HiOutlineLocationMarker className="my-auto mr-1" />
    <p>거리</p>
  </div>

  );
}

export default DistanceLogo;
