import React from "react";
import { useRouter } from "next/router";
import MainLayout from "../../../components/common/MainLayout";
import Head from "next/head";
import ReviewForm from "../../../components/review/components/Reviewform";

function Post(props) {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
    <MainLayout>
      <div>
        <Head>
          <title>VeganPleasure | 리뷰 작성</title>
        </Head>
        <div className="py-4 mx-9">
          <ReviewForm params={params} />
        </div>
      </div>
    </MainLayout>
  );
}

export default Post;
