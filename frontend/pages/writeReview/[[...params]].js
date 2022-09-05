import React from "react";
import { useRouter } from "next/router";
import ReviewForm from "../../components/review/Reviewform";
import MainLayout from "../../components/common/MainLayout";
import Head from "next/head";

function WriteReview(props) {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <MainLayout>
        <div>
          <Head>
            <title>VeganPleasure | 리뷰 작성</title>
          </Head>
          <div className="my-20 mx-5">
            <ReviewForm params={params} />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default WriteReview;
