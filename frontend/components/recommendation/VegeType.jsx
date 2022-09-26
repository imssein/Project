import React, { useState, useEffect } from "react";
import { AiFillSmile, AiOutlineInfo } from "react-icons/ai";
import Link from "next/link";
import RestaurantContainers from "./containers/RestaurantContainers";
function VegeType({ data }) {
  const maxValue = Math.max(...data);
  const [type, setType] = useState("");

  // console.log("maxValue", maxValue)
  // console.log("index", data.indexOf(maxValue))
  // data={[vegan, ovo, pesco, lacto, lactoovo, polo, flexi]}

  useEffect(() => {
    if (data.indexOf(maxValue) === 0) {
      setType("비건");
    } else if (data.indexOf(maxValue) === 1) {
      setType("오보");
    } else if (data.indexOf(maxValue) === 2) {
      setType("페스코");
    } else if (data.indexOf(maxValue) === 3) {
      setType("락토");
    } else if (data.indexOf(maxValue) === 4) {
      setType("락토오보");
    } else if (data.indexOf(maxValue) === 5) {
      setType("폴로");
    } else if (data.indexOf(maxValue) === 6) {
      setType("플렉시");
    }
  }, [data, maxValue, setType]);

  console.log("type:", type);

  return (
    <div>
      <div className="mt-8 rounded-xl py-4 px-4 bg-white mx-9">
        <div className="text-xl text-left text-text-green font-semibold ">
          {type} 음식을 찾으시나요? 
        </div>
        <RestaurantContainers category="vegetarianTypes" type={type} />
      </div>
    </div>
  );
}

export default VegeType;
