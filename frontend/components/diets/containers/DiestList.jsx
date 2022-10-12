import React, { useContext } from "react";
import { DietsContext } from "../../../contexts/Diets";
import VegeCount from "../../VegeTrend/containers/VegeCount";
import VegeLevel from "../../VegeTrend/VegeLevel";
import VegeMonth from "../../VegeTrend/VegeMonth";

function DiestList(props) {
  const content = useContext(DietsContext);

  return (
    <div className="pb-36 h-full bg-gray-4 px-9">
      <VegeLevel length={content.length} />
      <div className="mt-5">
        <VegeCount content={content} />
      </div>
      <div className="mt-9 bg-gray-4">
        <VegeMonth content={content} />
      </div>

    </div>
  );
}

export default DiestList;
