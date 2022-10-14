import React from "react";
import EditDelete from "../../post/common/EditDelete";
import StarRating from "../../restaurant/StarRating";
import SliderImg from "../../post/common/SliderImg";
import { REVIEW } from "../../../config";

function List({ item, params }) {
  return (
    <div className="mt-5 px-3" key={item.id}>
      <div className="flex">
        <div className="pt-4 overflow-hidden h-12 w-12 rounded-full bg-bg text-xs text-center">
          {item.memberDto.nickname}
        </div>
        <div className="ml-3">
          <div className="my-auto text-left">{item.memberDto.nickname}</div>
          <div className="text-xs my-2 text-gray-500">{item.createdTime}</div>
        </div>
      </div>
      <div className="my-3 text-center">
        <SliderImg item={item} />
      </div>
      <div className="flex justify-between">
        <StarRating rating={item.starRating} />
        <EditDelete
          api={`${REVIEW.REVIEW}/${params}/${item.id}`}
          url={`/restaurants/${params}`}
          editApi={`/review/edit/${params}/${item.id}`}
        />
      </div>
      <div className="text-left my-6">{item.content}</div>
    </div>
  );
}

export default List;
