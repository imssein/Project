import React from "react";
import DietsListContainer from "./containers/DietsListContainer";
function VegeTrend(props) {
  return (
    <div className="h-full bg-gray-4 px-9">
      {/* 채식 레벨 */}
      {/* 내가 가장 많이 먹은 채식 타입 */}
      {/* 월별 채식 기록 현황 (개수) */}
      {/* 현재 나의 채식 단계 */}
      <DietsListContainer />
    </div>
  );
}

export default VegeTrend;
