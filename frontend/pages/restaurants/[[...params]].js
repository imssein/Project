import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import MainLayout from "../../components/common/MainLayout";
import StoreDetail from "../../components/restaurant/StoreDetail";
import { StoreDetailProvider } from "../../contexts/Store/detail";
import { ReviewProvider } from "../../contexts/Review";
import ReviewListContainer from "../../components/review/containers/ReviewListContainer";

function Restaurants() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
    <MainLayout>
      <div className="px-9 md:px-16 h-full bg-gray-4">
        <div className="">
          <Head>
            <title>Vegan Pleasure | 맛있는 채식 한끼</title>
          </Head>
          <div className="h-full bg-gray-4 pt-8 pb-36">
            <StoreDetailProvider params={params}>
              <StoreDetail params={params} />
            </StoreDetailProvider>
            <div className="my-11 font-semibold">리뷰</div>
            <ReviewProvider params={params}>
              <ReviewListContainer params={params} />
                {/* <ReviewDetail params={params} /> */}
            </ReviewProvider>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Restaurants;
