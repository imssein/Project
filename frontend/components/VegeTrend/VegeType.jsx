import React, { useState, useEffect } from "react";
import { AiFillSmile, AiOutlineInfo } from "react-icons/ai";
import Link from "next/link";

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
    <div className="flex justify-between mt-4 bg-main py-4 px-4 rounded-full">
    <div className="flex">
      <AiFillSmile size={25} className="text-green my-auto" />
      {/* <Image src={`/images/${icon}`} width={50} height={30} alt="레벨 로고" /> */}
      <p className="ml-2">{type}</p>
    </div>
    <div className="text-xs my-auto cursor-pointer">
    <Link href="/information/vegetarian">
        <div className="flex">
          <AiOutlineInfo className="my-auto" />
          <p>채식 타입 안내</p>
        </div>
    </Link>
    </div>
  </div>
  )
}

export default VegeType;
