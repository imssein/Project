import Image from "next/image";
import React from "react";
import { IoLeafOutline, TbCheese, BsEggFried } from "react-icons/io5";

const types = [
  {
    id: 1,
    title: "비건",
    file: "vegan.png",
  },
  {
    id: 2,
    title: "락토",
    file: "lacto.png",
  },
  {
    id: 3,
    title: "오보",
    file: "ovo.png",
  },
  {
    id: 4,
    title: "락토오보",
    file: "lactoovo.png",
  },
  {
    id: 5,
    title: "페스코",
    file: "pesco.png",
  },
  {
    id: 6,
    title: "지향없음",
    file: "close.png",
  },
];
function Vegetarian(props) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {types.map((type) => (
        <div
          key={type.id}
          className="rounded-lg bg-gray-100 inline-block py-3 justify-center"
        >
          <Image src={`/images/${type.file}`} width={30} height={30} alt="채식타입그림"/>
          <p className="text-xs">{type.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Vegetarian;
