import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function StarRating({ rating }) {
  const result = [];
  console.log(parseInt(rating));

  for (var i = 0; i < parseInt(rating); i++) {
    result.push(<AiFillStar key={i} color="orange" size="18" />);
  }
  for (var i = 0; i < 5 - parseInt(rating); i++) {
    result.push(<AiOutlineStar key={i} color="orange" size="18" />);
  }
  return <div className="flex">{result}</div>;
}

export default StarRating;
