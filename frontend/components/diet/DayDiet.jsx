import Image from "next/image";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {FiArrowLeft} from 'react-icons/fi';
function DayDiet({ content }) {
  const router = useRouter();

  console.log("content", content);
  const [date, setDate] = useState("");

  useEffect(() => {
    if(content && content.length > 0){
      setDate(content[0].createdTime)
    }
  }, [content]);

  function handleLeft(e) {
    e.preventDefault();
    router.push("/foodRecord/calendar")
  }

  return (
    <div className="pb-36 bg-gray-4 px-9">
      <div className="flex justify-between mb-16">
      <div className="">
          <FiArrowLeft size="25" onClick={handleLeft}/>
        </div>
      <div className="my-auto text-center text-lg">
        {date}
      </div>
      <div>

      </div>
      </div>
      <div className="">
      {content && content.map((item) => (
        <Link href={`/foodRecord/detail/${item.id}`} key={item.id}>
          <div className="flex mb-7">
            <div className=" my-auto">
            {item.uploadFiles &&
                item.uploadFiles.map((content) => (
                  <div className="my-auto" key={content.id}>
                    <Image
                      src={`/images/${content.savedFileName}`}
                      width={150}
                      height={150}
                      alt="식당 사진"
                    />
                  </div>
            ))}
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
    </div>
  );
}

export default DayDiet;
