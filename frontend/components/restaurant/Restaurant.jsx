import React, { useEffect } from "react";
import { FaRegEdit, FaRegHeart, FaPen, FaHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import LikeContainer from "../likes/containers/LikeContainer";
import { LikeProvider } from "../../contexts/Like";
import StarRating from "./StarRating";

function Restaurant({ content }) {
  return (
    <div className="">
      {content.uploadFiles &&
        content.uploadFiles.map((item) => (
          <div className="text-center my-auto" key={item.id}>
            <Image
              src={`/images/${item.savedFileName}`}
              width={500}
              height={400}
              alt="식당 사진"
            />
          </div>
        ))}
      <div className="my-3">
        <p className="text-lg sm:text-2xl">{content.name}</p>
        <p className="mt-1 text-gray-3 text-sm">
          {content.category} &nbsp; | &nbsp; {content.vegetarianTypes}
        </p>
      </div>
      <div className="flex justify-between border-b-2 border-bg pb-3 my-auto">
        <div className="flex">
          <div className="my-auto mr-2">
            <StarRating rating={content.starRating} />
          </div>
          <div className="text-lg">{content.starRating}</div>
        </div>
        <div className="flex text-gray-3 my-auto">
          <FaPen />
          <p className="pl-2 pr-4 text-sm">{content.reviewCount}</p>
          <FaHeart color="pink" />
          <p className="pl-2 text-sm">{content.likesNum}</p>
        </div>
      </div>

      <div className="my-3 flex text-gray-3">
        {/* 리뷰 */}
        <div className="pr-3">
          <Link href={`/review/post/${content.id}`}>
            <FaRegEdit className="mx-auto mb-2 mr-3 cursor-pointer" size="25" />
          </Link>
          <p className="text-sm">리뷰 작성</p>
        </div>
        <div>
        <LikeProvider type="store">
          <LikeContainer name={content.name} id={content.id} type="store" />
        </LikeProvider>
        <p className="text-sm ml-2">좋아요</p>
        </div>
      </div>

      <div className="border-t-2 border-bg  my-4 text-gray-3">
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
