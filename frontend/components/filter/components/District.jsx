import React from "react";

const data = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "도봉구",
  "동대문구",
  "동작구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "마포구",
  "노원구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "종로구",
  "중구",
  "중랑구",
];
function District(props) {
  return (
    <div className="z-30 absolute bg-bg-2 h-96">
        <div className="overflow-auto">
        <div className="grid grid-cols-2">

        {data && data.map((item) => (

            <div className="px-8 border" key={item.id}>

                {item}
            </div>
            
        ))}
        </div>
         </div>
    </div>
  )
}

export default District;
