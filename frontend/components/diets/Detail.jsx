import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import { DIET } from "../../config";
import authHeader from "../../services/auth-header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./Type";

function Detail({ content }) {
  const router = useRouter();

  function handleDelete(){ 
    axios.delete(`${DIET.DIETSLIST}/${content.id}`, {
      headers: authHeader()
    })
    .then(() => {
      alert("식단 기록 삭제")
      router.push("/foodRecord/all");
    })

  }

  return (
    <div className="h-screen text-center px-4">
      <div className="mt-4 ">
      
        {content.uploadFiles ?
        <Slider {...settings}>
          {content.uploadFiles.map((item) => (
            <div className="my-auto" key={item.id}>
              <Image
                src={`/images/${item.savedFileName}`}
                width={500}
                height={500}
                alt="식당 사진"
              />
            </div>
          ))}
          </Slider>
          : <div className="w-64 h-64 bg-gray"></div> }
        
      </div>
      <div className="flex text-xs float-right text-gray mt-2">
        <Link href={`/foodRecord/edit/${content.id}`}>
        <div>수정</div>

        </Link>
        <div> &nbsp; | &nbsp; </div>
        <div onClick={handleDelete}>삭제</div>
      </div>

      <div className="mr-auto text-left mt-11 mb-24">
        <div className="my-1">{content.type}</div>
        <div className="text-xs text-gray-500 my-1">
          {content.vegetarianType} • {content.amount}
        </div>
        <div className="text-sm">{content.memo}</div>
      </div>
    </div>
  );
}

export default Detail;
