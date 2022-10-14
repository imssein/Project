import React from "react";
import Head from "next/head";
import SubLayout from "../../../components/common/SubLayout";
import { useRouter } from "next/router";
import { HashTagsProvider } from "../../../contexts/Feed/HashTags";
import HashTagContainer from "../../../components/feed/containers/HashTagContainer";

function Feed(props) {
  const router = useRouter();
  const { params } = router.query;
  const hashTag = encodeURIComponent(params);

  return (
    <SubLayout>
      <Head>
        <title>VeganPleasure | 피드</title>
      </Head>
      <div className="px-9">
        <div>
          <HashTagsProvider hashTag={hashTag}>
            <HashTagContainer />
          </HashTagsProvider>
        </div>
      </div>
    </SubLayout>
  );
}

export default Feed;
