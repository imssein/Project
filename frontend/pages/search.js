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
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <MainLayout>
        <div className="px-4">
          <Head>
            <title>VeganPleasure | 내주변</title>
          </Head>
          <SearchMain />
          <GeolocationPrint query={item} />
        </div>
      </MainLayout>
    </div>
  );
}

export default withRouter(Search);
