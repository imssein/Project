import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import FeedForm from "../../components/post/FeedForm";

function Feed(props) {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
    <div className="py-5 px-5">
      <Head>
        <title>Vegan Pleasure | 맛있는 채식 한끼</title>
      </Head>
      <FeedForm />
    </div>
  );
}

export default Feed;
