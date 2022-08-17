import React from "react";
import FilterLogo from "../components/searchfilter/FilterLogo";
import SearchForm from "../components/intro/SearchForm";
import DistrictLogo from "../components/searchfilter/DistrictLogo";
import DistanceLogo from "../components/searchfilter/DistanceLogo";
import Head from "next/head";
import GeolocationPrint from "../components/search/GeolocationPrint";
import StoreList from "../components/nearbySearch/RestaurantsList";
import LatLng2Wtm from "../components/searchfilter/LatLng2Wtm";
import DistanceCalculator from "../components/searchfilter/DistanceCalculator";
import Address2Wtm from "../components/distance/Address2Wtm";
import SearchMain from "../components/search/SearchMain";
function nearbySearch(props) {
  return (
    <div className="px-4">
      <Head>
        <title>VeganPleasure | 내주변</title>
      </Head>
      <SearchMain />
      <div>
           <LatLng2Wtm />
      </div>
      {/* 내위치 */}
      <GeolocationPrint />
    </div>
  );
}

export default nearbySearch;
