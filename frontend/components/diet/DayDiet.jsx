import Image from "next/image";
import React from "react";
import Link from "next/link";

function DayDiet({ content }) {
  console.log(content);

  return (
    <div className="py-11 px-11 ">
      {content.map((item) => (
        <Link href={`/detailDiet/${item.id}`} key={item.id}>
          <div className="flex mb-7">
            <div className="border my-auto">
              <Image
                src="/images/recipe.png"
                width={150}
                height={150}
                alt="예시"
              />
            </div>
            <div className="pt-2 pb-5 ml-9 sm:ml-10">
              <p className="mb-2">{item.type}</p>
              <p className="text-xs text-gray-600 mb-5">
                {item.vegetarianType} • {item.amount}
              </p>
              <p className="text-sm text-gray-600 mb-1">{item.memo}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DayDiet;
