import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { settings } from "../diets/Type";

function UploadImg({ showImages, setShowImages }) {
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  return (
    <div>
      <input
        type="file"
        id="Img"
        accept="image/*"
        name="multipartFiles"
        multiple
        onChange={handleAddImages}
      />

      <div className="text-center py-4">
        <Slider {...settings}>
          {showImages &&
            showImages.map((image, id) => (
              <div key={id}>
                <Image
                  src={image}
                  alt={`${image}-${id}`}
                  width="200"
                  height="200"
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default UploadImg;
