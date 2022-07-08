import React from "react";
import { FaCaretDown } from "react-icons/fa";

function DistrictLogo(props) {
  return (
    <div>
      <div className="flex rounded-full bg-stone-200 py-2 px-3 mx-4">
        <FaCaretDown className="my-auto mr-1" />
        <p>지역</p>
      </div>
    </div>
  );
}

export default DistrictLogo;
