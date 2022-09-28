import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import MainLayout from "../../components/common/MainLayout";
import StoreDetail from "../../components/restaurant/StoreDetail";
import { StoreDetailProvider } from "../../contexts/Store/detail";
import { ReviewProvider } from "../../contexts/Review";
import ReviewDetail from "../../components/restaurant/ReviewDetail";
function Restaurants() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
    <MainLayout>
      <div className="h-full bg-gray-4">
        <div className="">
          <Head>
            <title>Vegan Pleasure | 맛있는 채식 한끼</title>
          </Head>
          <div className="h-full bg-gray-4 px-9 pt-4 pb-36">
            <StoreDetailProvider params={params}>
              <StoreDetail params={params} />
            </StoreDetailProvider>
            <ReviewProvider params={params}>
                <ReviewDetail params={params} />
            </ReviewProvider>
          </div>
       
        </div>
      </div>
    </MainLayout>
  );
}

export default Restaurants;
