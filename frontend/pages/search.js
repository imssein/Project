import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";
import SearchMain from "../components/search/SearchMain";
import SearchType from "../components/search/SearchType";
import MainLayout from "../components/common/MainLayout";
import { AddressProvider } from "../contexts/KaKaoMap";

function Search({ router: { query }, latitude, longitude }) {
  const item = query.query;
  console.log("검색한것:", item);

  return (
    <MainLayout>
          <Head>
            <title>VeganPleasure | 내주변</title>
          </Head>
          <div className="px-4 bg-gray-4">
          <SearchMain />
          <AddressProvider longitude={longitude} latitude={latitude}>
            <SearchType query={item} longitude={longitude} latitude={latitude}/>
          </AddressProvider>
        </div>
    </MainLayout>
  );
}

export default withRouter(Search);
