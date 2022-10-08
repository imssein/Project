import React from "react";
import Head from "next/head";
// import GeolocationPrint from "../components/search/GeolocationPrint";
import LatLng2Wtm from "../components/searchfilter/LatLng2Wtm";
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
      {/* <GeolocationPrint /> */}
    </div>
  );
}

export default nearbySearch;
