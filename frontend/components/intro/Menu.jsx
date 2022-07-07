import Link from "next/link";
import React from "react";

const datas = [
  {
    id: 1,
    href: "nearbySearch",
    title: "내 주변 채식한끼",
    subTitle: "근처의 채식 맛집 보러가기",
    color: "bg-green-50 rounded-lg py-8",
  },
  {
    id: 2,
    href: "foodRecord",
    title: "채식 식단 기록",
    subTitle: "오늘 먹은 채식 간단히 기록하기",
    color: "bg-lime-50 rounded-lg py-8 mt-2",
  },
];

function Menu(props) {
  return (
    <div className="py-10">
      {datas.map((data) => (
        <Link href={`/${data.href}`} key={data.id}>
          <div className={data.color}>
            <p className="text-2xl text-slate-700 font-extrabold">
              {data.title}
            </p>
            <p className="text-gray-400 mt-2">{data.subTitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
