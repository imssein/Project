import Link from "next/link";
import React from "react";
import { FaRegEdit, FaRegHeart, FaPen, FaHeart } from "react-icons/fa";
import useSWR from "swr";
import RestaurantMap from "./RestaurantMap";

const fetcher = (...args) => fetch(...args).then(res => res.json())

function RestaurantDetail({ params }) {
  const { data, error } = useSWR(`http://localhost:9090/v1/api/stores/${params}`, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return(
    <div>
      <div key={data.id}>
        <div className="flex justify-between">
          <div className="flex">
            <p className="text-xl sm:text-2xl">{data.name}</p>
            <p className="text-xl ml-4 text-lime-700 sm:text-2xl">
              {data.starRating}
            </p>
          </div>
          <div className="flex">
            {/* 리뷰 */}
            <div className="px-6">
              <Link href={`/review/${params}`}>
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
          <p className="pl-2 pr-4 text-sm">{data.reviewCount}</p>
          <FaHeart color="pink" />
          <p className="pl-2 text-sm">100</p>
        </div>
        <div className="border-y-2 my-4">
          <div className="my-3 grid-cols-3 gap-4 grid">
            <p>주소</p>
            <p className="col-span-2">{data.address}</p>
          </div>
          <div className="my-3 grid-cols-3 gap-4 grid">
            <p>채식 타입</p>
            <p className="col-span-2">{data.vegetarianTypes}</p>
          </div>
          <div className="my-3 grid-cols-3 gap-4 grid">
            <p>업종</p>
            <p className="col-span-2">{data.category}</p>
          </div>
          <div className="my-3 grid-cols-3 gap-4 grid">
            <p>번호</p>
            <p className="col-span-2">{data.phoneNumber}</p>
          </div>
          <div className="grid-cols-3 gap-4 grid">
            <p>메뉴</p>
            <p className="col-span-2">{data.menus}</p>
          </div>
        </div>
      </div>
      <RestaurantMap data={data} />
    </div>
  );
}

export default RestaurantDetail;
