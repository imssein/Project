import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useCallback } from "react";
import { FiMoreHorizontal,FiArrowLeft } from "react-icons/fi";
import MoreFeature from "./MoreFeature";
function Detail({ content }) {
  const router = useRouter();
    const [more, setMore] = useState(false);
    
    const onToggleMore = useCallback(() => {
        setMore((prev) => !prev);
      }, []);

    function handleLeft(e) {
      e.preventDefault();
      router.push("/foodRecord/calendar")

    }
  return (
    <div className="text-center py-8 px-4 absoute">
      <div className="mb-11 flex justify-center">
        <div>
          <FiArrowLeft size="25" onClick={handleLeft}/>
        </div>
        <div className="text-lg text-center ml-auto">{content.createdTime}</div>
        <div className="ml-auto">
        <FiMoreHorizontal size="25" onClick={onToggleMore} />
        </div>
      </div>
      {more && <MoreFeature id={content.id} />}

      <div className="mt-4 mb-11 md:py-11">
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
