import React from "react";
import FeedListContainer from "../components/feed/containers/FeedListContainer";
import Head from "next/head";

function FeedPage(props) {
  return (
    <div className="px-4 text-center">
      <Head>
        <title>VeganPleasure | 피드</title>
      </Head>
      <div className="my-24">
        <FeedListContainer />
      </div>
    </div>
  );
}

export default FeedPage;
