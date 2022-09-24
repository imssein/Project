import React from "react";
import { useRouter } from "next/router";
import VegeInfo from "../../components/common/VegeInfo";
import MainLayout from "../../components/common/MainLayout";
import Head from "next/head";
import VegeRanking from "../../components/information/VegeRanking";
function Information(props) {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params[0] === "vegetarian") {
    return (
      <div className="pt-4 md: max-w-2xl md:mx-auto">
        <MainLayout>
          <div className="px-6 py-6">
            <Head>
              <title>VeganPleasure | 채식 타입 안내</title>
            </Head>
            <VegeInfo
              src="/images/leaf.png"
              title="채식 타입 안내"
              description="채식 종류와 지향성 정리"
              infoSrc="/images/vegeinfo.jpg"
            />
          </div>
        </MainLayout>
      </div>
    );
  } else if (params[0] === "diary") {
    return (
      <div className="pt-4 md: max-w-2xl md:mx-auto">
        <MainLayout>
          <div className="px-6 py-6">
            <Head>
              <title>VeganPleasure | 채식 기록 안내</title>
            </Head>
            <VegeInfo
              src="/images/calender.png"
              title="채식 한끼 기록"
              description="채식 한끼 간편 기록"
              infoSrc="/images/vegeinfo.jpg"
            />
          </div>
        </MainLayout>
      </div>
    );
  } else if (params[0] === "restaurant") {
    return (
      <div className="pt-4 md: max-w-2xl md:mx-auto">
        <MainLayout>
          <div className="px-6 py-6">
            <Head>
              <title>VeganPleasure | 채식 식당 안내</title>
            </Head>
            <VegeInfo
              src="/images/restaurant.png"
              title="채식 한끼 기록"
              description="서울시 채식 식당"
              infoSrc="/images/vegeinfo.jpg"
            />
          </div>
        </MainLayout>
      </div>
    );
  } else if (params[0] === "feed") {
    return (
      <div className="pt-4 md: max-w-2xl md:mx-auto">
        <MainLayout>
          <div className="px-6 py-6">
            <Head>
              <title>VeganPleasure | 채식 피드 안내</title>
            </Head>
            <VegeInfo
              src="/images/feed.png"
              title="채식 피드 안내"
              description="채식 커뮤니티"
              infoSrc="/images/vegeinfo.jpg"
            />
          </div>
        </MainLayout>
      </div>
    ); 
  } else if (params[0] === "ranking") {
    return (
      <div className="pt-4 md: max-w-2xl md:mx-auto">
        <MainLayout>
          <div className="px-6 py-6">
            <Head>
              <title>VeganPleasure | 채식 랭킹 안내</title>
            </Head>
          <VegeRanking />
          </div>
        </MainLayout>
      </div>
    ); 
}
}

export default Information;
