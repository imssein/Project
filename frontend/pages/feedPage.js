import React from "react";
import FeedListContainer from "../components/feed/containers/FeedListContainer";
import Head from "next/head";
import SubLayout from "../components/common/SubLayout";

function FeedPage(props) {
  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <SubLayout>
        <div className="px-4 text-center">
          <Head>
            <title>VeganPleasure | 피드</title>
          </Head>
          <div className="my-24">
            <FeedListContainer />
          </div>
        </div>
      </SubLayout>
    </div>
  );
}

export default FeedPage;
