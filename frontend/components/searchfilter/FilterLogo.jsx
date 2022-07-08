import React from "react";
import { AiOutlineFilter } from "react-icons/ai";

function FilterLogo(props) {
  return (
    <div>
      <div className="flex rounded-full bg-slate-200 py-2 px-3">
        <AiOutlineFilter className="my-auto mr-1"/>
        <p>필터</p>
      </div>
    </div>
  );
}

export default FilterLogo;
