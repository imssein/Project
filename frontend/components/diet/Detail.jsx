import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import MoreFeature from "./MoreFeature";
function Detail({ content }) {
    const [more, setMore] = useState(false);

    const onToggleMore = useCallback(() => {
        setMore((prev) => !prev);
      }, []);
  return (
    <div className="text-center py-8 px-4 ">
      <div className="flex justify-center">
        <div></div>
        <div className="text-lg text-center ml-auto">{content.createdTime}</div>
        <div className="ml-auto">
        <FiMoreHorizontal size="25" onClick={onToggleMore} />
        </div>
      </div>
      {more && <MoreFeature id={content.id} />}

      <div className="my-4">
        <Image
          src="/images/recipe.png"
          width={500}
          height={500}
          alt="예시"
          className="rounded-lg"
        />
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
