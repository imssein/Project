import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Title from "../../components/intro/Title";
import SeoulData from "../../components/seoulMap/SeoulData";

function Map() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
    <div>
      <Head>
        <title>Vegan Pleasure | 맛있는 채식 한끼</title>
      </Head>
      <div>
        <div className="text-center my-10">
          {/* 서울시 자치구 선택 지도 */}
          <Title title="맛있는 채식 한끼" description="지역을 클릭하면 해당 구의 채식 식당을 확인 할 수 있습니다." />
        </div>
        {/* 지역구명 */}
        <SeoulData params={params} />
      </div>
    </div>
  );
}

export default Map;
