import React from "react";
import Head from "next/head";
import MainLayout from "../../components/common/MainLayout";
import { FeedProvider } from "../../contexts/Feed";
import FeedListContainer from "../../components/feed/containers/FeedListContainer";
import Button from "../../components/diets/common/Button";
import SubLayout from "../../components/common/SubLayout";
import Link from "next/link";
function Feed(props) {
  return (
    <SubLayout>
      <Head>
        <title>VeganPleasure | 피드</title>
      </Head>
      <div className="px-9">
      
        <div>
          <FeedProvider>
            <FeedListContainer />
          </FeedProvider>
        </div>
      </div>
    </SubLayout>
  );
}

export default Feed;
