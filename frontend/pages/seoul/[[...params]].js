import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import MainLayout from "../../components/common/MainLayout";
import District from "../../components/seoulMap/District";
import SeoulMap from "../../components/seoulMap/SeoulMap";
import Title from "../../components/intro/Title";
function Map() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
    <div>
      <Head>
        <title>Vegan Pleasure | 맛있는 채식 한끼</title>
      </Head>
      <MainLayout>
        <div className="text-center my-10">
          {/* 서울시 자치구 선택 지도 */}
          <Title />
          <SeoulMap />
        </div>
        {/* 지역구명 */}
        <District params={params} />
      </MainLayout>
    </div>
  );
}

export default Map;
