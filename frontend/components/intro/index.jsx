import React from "react";
import Vegetarian from "./Vegetarian";
import SearchMain from "../search/SearchMain";

function Intro(props) {
  return (
    <div className="mx-auto mb-32 bg-gray-4">
      <SearchMain />
      {/* <SeoulMap /> */}
      <Vegetarian />
      {/* 내주변 인기맛집 */}
    </div>
  );
}

export default Intro;
