import React, { useState, useEffect } from "react";
import { AiFillSmile, AiOutlineInfo } from "react-icons/ai";
import Link from "next/link";
function VegeLevel({ length }) {
  console.log(length);
  const [level, setLevel] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    if (length <= 30) {
      setLevel("씨앗");
      setIcon("seed.png");
    } else if (length <= 60) {
      setLevel("새싹");
      setIcon("sprout.png");
    } else if (length <= 120) {
      setLevel("열매");
      setIcon("cherry.png");
    } else {
      setLevel("나무");
      setIcon("tree.png");
    }
  }, [length]);

  return (
    <div className="flex justify-between mt-4 bg-main py-4 px-4 rounded-full">
      <div className="flex">
        <AiFillSmile size={25} className="text-green my-auto" />
        {/* <Image src={`/images/${icon}`} width={50} height={30} alt="레벨 로고" /> */}
        <p className="ml-2">{level} 단계</p>
      </div>
      <div className="text-xs my-auto cursor-pointer">
        <Link href="/information/ranking">
          <div className="flex">
            <AiOutlineInfo className="my-auto" />
            <p>채식 레벨이란?</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default VegeLevel;
