import React, { useContext } from "react";
import { AddressContext } from "../../contexts/KaKaoMap";
import { BsFillGeoAltFill } from "react-icons/bs";

function FilterResult(props) {
  const address = useContext(AddressContext);

  return (
    <div className="w-full">
      <div className="flex my-6 justify-end">
        <BsFillGeoAltFill size="20" className="mr-2" />
        <p className="font-medium">내 위치 : {address[0]}</p>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default FilterResult;
