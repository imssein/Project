import React from "react";
import FilterLogo from "../components/searchfilter/FilterLogo";
import SearchForm from "../components/intro/SearchForm";
import DistrictLogo from "../components/searchfilter/DistrictLogo";
import DistanceLogo from "../components/searchfilter/DistanceLogo";
import Head from "next/head";
import GeolocationPrint from "../components/nearbySearch/GeolocationPrint";
import StoreList from "../components/nearbySearch/RestaurantsList";
function nearbySearch(props) {
  return (
    <div className="px-4">
      <Head>
        <title>VeganPleasure | 내주변</title>
      </Head>
      <SearchForm />
      <div className="flex justify-center">
        <DistrictLogo />
        <DistanceLogo />
      </div>
      {/* 내위치 */}
      <GeolocationPrint />
     
    </div>
  );
}

export default nearbySearch;
