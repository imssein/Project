import React from "react";
import Head from "next/head";
import FeedForm from "../components/post/FeedForm";

import { useSelector } from "react-redux";

function writePost(props) {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <div className="py-5 px-5">
      <Head>
        <title>Vegan Pleasure | 맛있는 채식 한끼</title>
      </Head>
      {isLoggedIn && <FeedForm />}
    </div>
  );
}

export default writePost;
