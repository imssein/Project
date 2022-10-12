import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";

function DeitsList({ content }) {
  return (
    <div className="h-full bg-gray-4 px-9">
      {content &&
        content.map((item) => (
          <Link href={`/foodRecord/detail/${item.id}`} key={item.id}>
            <div className="flex mb-7">
              <div className=" my-auto">
                {item.uploadFiles[0] ?  
                <Image
                  src={`/images/${item.uploadFiles[0].savedFileName}`}
                  width={144}
                  height={144}
                  alt="식단 사진"
                /> : <div className="w-36 h-36 bg-gray-2"></div>}
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

export default DeitsList;
