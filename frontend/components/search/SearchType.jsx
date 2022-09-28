import React, { useContext } from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
import { AddressContext } from "../../contexts/KaKaoMap";
import { StoreSearchProvider } from "../../contexts/Store/search";
import SearchResult from "./SearchResult";

function SearchType({ query, longitude, latitude }) {
  const address = useContext(AddressContext);

  console.log(address[0]);
  console.log(address[1]);

  if (query === encodeURIComponent("내주변")) {
    console.log("내주변 식당 검색");
    return (
      <div className="w-full">
        <div className="flex my-6 justify-end">
          <BsFillGeoAltFill size="20" className="mr-2" />
          <p className="font-medium">내 위치 : {address[0]}</p>
        </div>
        <StoreSearchProvider params={encodeURIComponent(address[1])}>
          <SearchResult latitude={latitude} longitude={longitude} />
        </StoreSearchProvider>
      </div>
    );
  } else {
    console.log("검색중");
    return (
      <div className="w-full">
        <div className="flex my-6 justify-end">
          <BsFillGeoAltFill size="20" className="mr-2" />
          <p className="font-medium">내 위치 : {address[0]}</p>
        </div>
        <StoreSearchProvider params={query}>
          <SearchResult latitude={latitude} longitude={longitude} />
        </StoreSearchProvider>
      </div>
    );
  }
}

export default SearchType;
