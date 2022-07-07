import React from "react";
import { AiOutlineFilter } from "react-icons/ai";

function FilterLogo(props) {
  return (
    <div>
      <div className="flex rounded-full bg-stone-200 py-2 px-2">
        <AiOutlineFilter className="my-auto"/>
        <p>필터</p>
      </div>
    </div>
  );
}

export default FilterLogo;
