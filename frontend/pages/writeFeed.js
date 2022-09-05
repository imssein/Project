import React from "react";
import FeedForm from "../components/feed/FeedForm";
import Head from "next/head";
import SubLayout from "../components/common/SubLayout";

function WriteFeed(props) {
  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <Head>
        <title>VeganPleasure | 피드 작성</title>
      </Head>
      <SubLayout>
        <div className="my-20 mx-5">
          <FeedForm />
        </div>
      </SubLayout>
    </div>
  );
}

export default WriteFeed;
