import React from "react";
import Vegetarian from "./Vegetarian";
import SearchMain from "../search/SearchMain";
import { AddressProvider } from "../../contexts/KaKaoMap";
import GeolocationContainer from "../recommendation/containers/GeolocationContainer";
import DietsContainer from "../recommendation/containers/DietsContainer";
import { VegeTypeProvider } from "../../contexts/Diets/vegeType";
import Shop from "../shop/components/Shop";
import ShopContainer from "../shop/containers/ShopContainer";
function Intro({ longitude, latitude }) {
  return (
    <div className="mx-auto pb-36 bg-gray-4">
      <SearchMain />
      {/* <SeoulMap /> */}
      <VegeTypeProvider>
        <DietsContainer />
      </VegeTypeProvider>
      {/* <DietsListContainer /> */}
      {/* 내주변 인기맛집 */} 
      <AddressProvider longitude={longitude} latitude={latitude} >
          <GeolocationContainer longitude={longitude} latitude={latitude} />
      </AddressProvider>
      <ShopContainer />
      {/* <GeolocationPrint /> */}
      <Vegetarian />
    </div>
  );
}

export default Intro;
