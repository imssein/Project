import Link from "next/link";
import React, { useEffect } from "react";
import DistrictTitle from "../common/DistrictTitle";
import { AiOutlineEdit, AiFillStar, AiFillHeart } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
function District({ districts, getDistricts }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    getDistricts();
  }, [getDistricts]);

  useEffect(() => {
    {
      districts.map((district) => setTitle(district.district));
    }
  }, [districts, setTitle]);

  console.log(districts);

  return (
    <div className="mb-20">
      <div className="flex mx-3">
        <DistrictTitle district={title} />
        <FilterLogo />
      </div>
      <div className="mt-5 text-sm mx-3">검색된 식당 {districts.length}개</div>
      <div className="my-4 ">
        {Object.keys(districts).map((key) => (
          <div
            key={districts[key].id}
            className="border-b border-gray px-4 py-6"
          >
            <Link href={`/restaurants/${districts[key].id}`}>
              <div className="flex">
                <div className="my-auto">
                  {districts[key].uploadFiles && districts[key].uploadFiles.map((item) => (
                    <div key={item.id}>
                      <Image src={`/images/${item.savedFileName}`}
                      width={150} height={130} alt="식당 사진" />
                      </div>
                  ))}
                </div>
                <div className="pt-2 pb-5 ml-11 md:ml-16">
                  <p className="text-lg mb-1">{districts[key].name}</p>
                  <p className="text-text-green font-bold mb-2">
                    {districts[key].vegetarianTypes}
                  </p>
                  <p className="text-xs text-gray-600 mb-1">
                    {districts[key].district}
                  </p>
                  <p className="mb-2">{districts[key].category}</p>
                  <div className="flex">
                    <div className="flex mr-2">
                      <AiFillStar size="20" color="orange" />
                      <p className="pl-1 text-sm">
                        {districts[key].starRating}
                      </p>
                    </div>
                    <div className="flex mr-2">
                      <AiOutlineEdit size="20" />
                      <p className="pl-1 text-sm">
                        {districts[key].reviewCount}
                      </p>
                    </div>
                    <div className="flex mr-2">
                      <AiFillHeart size="20" color="pink" />
                      <p className="pl-1 text-sm">
                        {districts[key].reviewCount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default District;
