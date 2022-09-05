import React from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import ReviewForm from "../../components/review/Reviewform";
import MainLayout from "../../components/common/MainLayout";

function Review(props) {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <MainLayout>
        <div className="py-5 px-5">
          <Head>
            <title>Vegan Pleasure | 맛있는 채식 한끼</title>
          </Head>
          <ReviewForm />
        </div>
      </MainLayout>
    </div>
  );
}

export default Review;
