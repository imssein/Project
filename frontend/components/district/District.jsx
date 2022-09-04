import Link from "next/link";
import React, { useEffect } from "react";
import DistrictTitle from "../common/DistrictTitle";
import FilterLogo from "../searchfilter/FilterLogo";

import {
  AiOutlineEdit,
  AiFillStar,
  AiFillHeart,
} from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";

function District({ districts, getDistricts }) {
    const [title, setTitle] = useState('');

     
  useEffect(() => {
    getDistricts();
  }, [getDistricts]);

  useEffect(()=> {
    {districts.map((district) => (
        setTitle(district.district)
    ))}
  }, [districts, setTitle]);

  console.log(districts);
  

  return (
    <div className="px-4">
      <div className="flex">
        <DistrictTitle district={title} />
        <FilterLogo />
      </div>
      <div className="mt-5 text-sm">검색된 식당 {districts.length}개</div>
      <div className="my-4">
        {Object.keys(districts).map((key) => (
          <div key={districts[key].id}>
            <Link href={`/restaurants/${districts[key].id}`}>
              <div className="flex mb-7">
                <div className="border my-auto">
                  <Image
                    src="/images/foodex.jpeg"
                    width={180}
                    height={150}
                    alt="식당 사진"
                  />
                </div>
                <div className="pt-2 pb-5 ml-5 sm:ml-10">
                  <p className="text-lime-700 font-bold mb-2">
                    {districts[key].vegetarianTypes}
                  </p>
                  <p className="text-lg mb-1">{districts[key].name}</p>
                  <p className="text-xs text-gray-600 mb-1">
                    {districts[key].district}
                  </p>
                  <p className="mb-2">{districts[key].category}</p>
                  <div className="flex">
                    <div className="flex mr-2">
                      <AiFillStar size="20" color="orange" />
                      <p className="pl-1 text-sm">{districts[key].starRating}</p>
                    </div>
                    <div className="flex mr-2">
                      <AiOutlineEdit size="20" />
                      <p className="pl-1 text-sm">{districts[key].reviewCount}</p>
                    </div>
                    <div className="flex mr-2">
                      <AiFillHeart size="20" color="pink" />
                      <p className="pl-1 text-sm">{districts[key].reviewCount}</p>
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
