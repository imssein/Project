import React from "react";
import FeedForm from "../../components/feed/components/FeedForm";
import Head from "next/head";
import MainLayout from "../../components/common/MainLayout";

function Post(props) {
  return (
    <MainLayout>
      <Head>
        <title>VeganPleasure | 피드 작성</title>
      </Head>
      <div className="px-9">
        <FeedForm />
      </div>
    </MainLayout>
  );
}

export default Post;
