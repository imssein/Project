import React, { useEffect } from "react";
import { FaRegEdit, FaRegHeart, FaPen, FaHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Restaurant({ content }) {

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex">
          <p className="text-xl sm:text-2xl">{content.name}</p>
          <p className="text-xl ml-4 text-lime-700 sm:text-2xl">
            {content.starRating}
          </p>
        </div>
        <div className="flex text-gray-3">
          {/* 리뷰 */}
          <div className="px-6">
            <Link href={`/review/post/${content.id}`}>
              <FaRegEdit className="mb-2 ml-3" size="30" />
            </Link>
            <p className="text-sm">리뷰 쓰기</p>
          </div>
          {/* 찜 */}
          <div className="">
            <FaRegHeart className="mb-2" size="30" />
            <p className="text-sm">찜하기</p>
          </div>
        </div>
      </div>
      <div className="flex text-gray-3">
        <FaPen />
        <p className="pl-2 pr-4 text-sm">{content.reviewCount}</p>
        <FaHeart color="pink" />
        <p className="pl-2 text-sm">100</p>
      </div>
      <div className="my-6">
        {content.uploadFiles &&
          content.uploadFiles.map((item) => (
            <div className="my-auto" key={item.id}>
              <Image
                src={`/images/${item.savedFileName}`}
                width={500}
                height={400}
                alt="식당 사진"
              />
            </div>
          ))}
      </div>
      <div className="border-t-4 border-bg  my-4 text-gray-3">
        <div className="my-3 grid-cols-3 gap-4 grid">
          <p>주소</p>
          <p className="col-span-2">{content.address}</p>
        </div>
        <div className="my-3 grid-cols-3 gap-4 grid">
          <p>채식 타입</p>
          <p className="col-span-2">{content.vegetarianTypes}</p>
        </div>
        <div className="my-3 grid-cols-3 gap-4 grid">
          <p>업종</p>
          <p className="col-span-2">{content.category}</p>
        </div>
        <div className="my-3 grid-cols-3 gap-4 grid">
          <p>번호</p>
          <p className="col-span-2">{content.phoneNumber}</p>
        </div>
        <div className="grid-cols-3 gap-4 grid mb-4">
          <p>메뉴</p>
          <p className="col-span-2">{content.menus}</p>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
