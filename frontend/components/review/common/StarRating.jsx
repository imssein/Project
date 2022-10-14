import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function StarRating({ setStarRating }) {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const array = [0, 1, 2, 3, 4];
  const result = [];

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);

    for (let i = 0; i < clicked.lengh; i++) {
      {
        true
          ? result.push(<AiFillStar color="orange" />)
          : result.push(<AiOutlineStar color="orange" />);
      }
    }
  };

  console.log(clicked);

  setStarRating(clicked.filter(Boolean).length);

  return (
    <div className="flex">
      {array.map((el) =>
        clicked[el] ? (
          <AiFillStar onClick={() => handleStarClick(el)} size="25" color="orange" />
        ) : (
          <AiOutlineStar onClick={() => handleStarClick(el)} size="25" color="orange" />
        )
      )}
    </div>
  );
}

export default StarRating;
