import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import RestaurantDetail from "../../components/restaurants/RestaurantDetail";
import RestaurantMap from "../../components/restaurants/RestaurantMap";
import RestaurantContainers from "../../components/restaurant/containers/RestaurantContainers";
import MainLayout from "../../components/common/MainLayout";
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
          <div className="h-full bg-gray-4">
            <RestaurantContainers params={params} />
          </div>
          {/* 이미지 */}
          {/* <RestaurantDetail params={params} /> */}
        </div>
      </div>
    </MainLayout>
  );
}

export default Restaurants;
