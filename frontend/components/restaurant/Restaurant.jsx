import React, { useEffect } from "react";
import { FaRegEdit, FaRegHeart, FaPen, FaHeart } from "react-icons/fa";
import Link from "next/link";

function Restaurant({ restaurant, getDetail }) {
  useEffect(() => {
    getDetail();
  }, [getDetail]);

  return (
    <div className="my-6">
      <div className="flex justify-between">
        <div className="flex">
          <p className="text-xl sm:text-2xl">{restaurant.name}</p>
          <p className="text-xl ml-4 text-lime-700 sm:text-2xl">
            {restaurant.starRating}
          </p>
        </div>
        <div className="flex">
          {/* 리뷰 */}
          <div className="px-6">
            <Link href={`/writeReview/${restaurant.id}`}>
              <FaRegEdit className="mb-2 ml-3" size="30" />
            </Link>
            <p className="text-sm">리뷰 쓰기</p>
          </div>
          {/* 찜 */}
          <div className="pr-6">
            <FaRegHeart className="mb-2" size="30" />
            <p className="text-sm">찜하기</p>
          </div>
        </div>
      </div>
      <div className="flex text-gray-600">
        <FaPen />
        <p className="pl-2 pr-4 text-sm">{restaurant.reviewCount}</p>
        <FaHeart color="pink" />
        <p className="pl-2 text-sm">100</p>
      </div>
      <div className="border-y-2 my-4">
        <div className="my-3 grid-cols-3 gap-4 grid">
          <p>주소</p>
          <p className="col-span-2">{restaurant.address}</p>
        </div>
        <div className="my-3 grid-cols-3 gap-4 grid">
          <p>채식 타입</p>
          <p className="col-span-2">{restaurant.vegetarianTypes}</p>
        </div>
        <div className="my-3 grid-cols-3 gap-4 grid">
          <p>업종</p>
          <p className="col-span-2">{restaurant.category}</p>
        </div>
        <div className="my-3 grid-cols-3 gap-4 grid">
          <p>번호</p>
          <p className="col-span-2">{restaurant.phoneNumber}</p>
        </div>
        <div className="grid-cols-3 gap-4 grid mb-4">
          <p>메뉴</p>
          <p className="col-span-2">{restaurant.menus}</p>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
