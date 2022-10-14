import React from 'react';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../data/setting"

function SliderImg({item}) {
    return (
        <div>
        {item.uploadFiles ?
        <Slider {...settings}>
          {item.uploadFiles.map((content) => (
            <div className="my-auto" key={content.id}>
              <Image
                src={`/images/${content.savedFileName}`}
                width={500}
                height={500}
                alt="식당 사진"
              />
            </div>
          ))}
          </Slider>
          : <div className="w-64 h-64 bg-gray"></div> }
        </div>
    );
}

export default SliderImg;