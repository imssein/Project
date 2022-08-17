import React from "react";
import Head from "next/head";
import { withRouter } from 'next/router';
import SearchMain from "../components/search/SearchMain";
import GeolocationPrint from "../components/search/GeolocationPrint";

function Search({router: { query } }) {
  const categories = (query.categories);
  console.log(categories);

  return (
    <div className="px-4">
      <Head>
        <title>VeganPleasure | 내주변</title>
      </Head>
      <SearchMain  />
      <GeolocationPrint query={categories} />
    </div>
  );
}

export default withRouter(Search);
