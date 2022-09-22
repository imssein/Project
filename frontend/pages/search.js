import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";
import SearchMain from "../components/search/SearchMain";
import GeolocationPrint from "../components/search/GeolocationPrint";
import MainLayout from "../components/common/MainLayout";

function Search({ router: { query } }) {
  const item = query.query;
  console.log("검색한것:", item);

  return (
    <MainLayout>
          <Head>
            <title>VeganPleasure | 내주변</title>
          </Head>
          <div className="px-4 bg-gray-4">
          <SearchMain />
          <GeolocationPrint query={item} />
        </div>
    </MainLayout>
  );
}

export default withRouter(Search);
