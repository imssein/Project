import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

function PostImages({ images }) {
  if (images.length === 1) {
    return (
      <>
        <Image
          src={images[0].src}
          alt={images[0].src}
          height={100}
          width={100}
        />
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <Image
          height={250}
          width={250}
          src={images[0].src}
          alt={images[0].src}
        />
        <Image
          height={250}
          width={125000}
          src={images[1].src}
          alt={images[1].src}
        />
      </>
    );
  }

  return (
    <div>
      <>
        <div>
          <Image
            height={400}
            width={500}
            src={images[0].src}
            alt={images[0].src}
          />
        </div>
      </>
    </div>
  );
}
PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
