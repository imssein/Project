import React from "react";

function Title(props) {
  return (
    <div className="pb-6">
      <div className="font-extrabold text-2xl text-lime-700 pb-4">
        맛있는 채식 한끼
      </div>
      <div className="text-gray-800 mb-4">
        지역을 클릭하면 해당 구의 채식 식당을 확인 할 수 있습니다.
      </div>
    </div>
  );
}

export default Title;
