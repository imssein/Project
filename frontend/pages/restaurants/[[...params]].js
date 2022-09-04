import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import RestaurantDetail from "../../components/restaurants/RestaurantDetail";
import RestaurantMap from "../../components/restaurants/RestaurantMap";
import RestaurantContainers from "../../components/restaurant/containers/RestaurantContainers";

function Restaurants() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
    <div className="py-5 px-5">
      <Head>
        <title>Vegan Pleasure | 맛있는 채식 한끼</title>
      </Head>
      
        {/* 이미지 */}
        <RestaurantContainers params={params} />
        {/* <RestaurantDetail params={params} /> */}
    </div>
  );
}

export default Restaurants;
