import React from "react";
import { data, settings } from "../data";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Shop(props) {
  return (
    <div className="my-5 mx-3 text-center">
      <Slider {...settings}>
        {data &&
          data.map((item) => (
            <Link href={item.href} key={item.id}>
              <div className="cursor-pointer">
              <div className="inline-block drop-shadow rounded-xl">
                <Image src={item.img}  width="60" height="60" alt="쇼핑몰 로고"/>
              </div>
              <p className="mt-1 text-gray text-xs truncate text-center">{item.title}</p>
              </div>
            </Link>
          ))}   
      </Slider>
    </div>
  );
}

export default Shop;
