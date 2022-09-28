import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useCallback } from "react";
import { FiMoreHorizontal,FiArrowLeft } from "react-icons/fi";
import MoreFeature from "./MoreFeature";
function Detail({ content }) {
    const [more, setMore] = useState(false);
    
  return (
    <div className="h-screen text-center px-4">
      <div className="mt-4 mb-11 ">
      {content.uploadFiles &&
                content.uploadFiles.map((item) => (
                  <div className="my-auto" key={item.id}>
                    <Image
                      src={`/images/${item.savedFileName}`}
                      width={500}
                      height={500}
                      alt="식당 사진"
                    />
                  </div>
                ))}

      </div>
      <div className="mr-auto text-left mb-24">
      <div className="text-xl my-3">{content.type}</div>
      <div className="text-sm text-gray-500 my-3">
        {content.vegetarianType} • {content.amount}
      </div>
      <div className="">{content.memo}</div>
      </div>
    </div>
  );
}

export default Detail;
