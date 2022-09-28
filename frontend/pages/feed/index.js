import React from "react";
import FeedListContainer from "../../components/feedCOmponent/containers/FeedListContainer";
import Head from "next/head";
import MainLayout from "../../components/common/MainLayout";

function Feed(props) {
  return (
    <MainLayout>
      <Head>
        <title>VeganPleasure | 피드</title>
      </Head>
      <div className="px-9">
        <FeedListContainer />
      </div>
    </MainLayout>
  );
}

export default Feed;
