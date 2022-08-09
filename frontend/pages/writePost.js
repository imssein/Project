import React from "react";
import Head from "next/head";
import FeedForm from "../components/post/FeedForm";

import { useSelector } from "react-redux";

function WritePost(props) {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <div className="py-5 px-5">
      <Head>
        <title>Vegan Pleasure | 글쓰기</title>
      </Head>
      {isLoggedIn && <FeedForm />}
    </div>
  );
}

export default WritePost;
