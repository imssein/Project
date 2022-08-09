import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    title: "채식 타입 안내",
    src: "/images/leaf.png",
    href: "/information/vegetarian",
  },
  {
    id: 2,
    title: "채식 한끼 기록",
    src: "/images/calender.png",
    href: "/information/diary",
  },
  {
    id: 3,
    title: "채식 식당 찾기",
    src: "/images/restaurant.png",
    href: "/information/restaurant",
  },
  {
    id: 4,
    title: "채식 피드",
    src: "/images/feed.png",
    href: "/information/feed",
  },
];

function VeganGuide(props) {
  return (
    <div className="grid grid-cols-2">
      {data.map((item) => (
        <Link href={item.href} key={item.id}>
          <div className="justify-center cursor-pointer border rounded-xl bg-gray-100 inline-block px-4 py-6 my-2 mx-2">
            <div className="">
              <Image src={item.src} width={32} height={32} alt="노트" />
            </div>
            <div>
              <p className="font-bold">{item.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default VeganGuide;
