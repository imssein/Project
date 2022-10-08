import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import DistrictContainers from "../../components/district/containers/DistrictContainers";
import SearchMain from "../../components/search/SearchMain";
function Map() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
    <div className="bg-white">
        <Head>
          <title>VeganPleasure | 맛집 조회</title>
        </Head>
        <div className="mx-9 py-4">
        <SearchMain />
        </div>
        <div className="">
        <DistrictContainers params={params} />
        </div>
    </div>
  );
}

export default Map;
