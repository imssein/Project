import React from "react";
import UserProfile from "../components/user/UserProfile";
import Head from "next/head";

function mypage(props) {
  return (
    <div className="">
      <Head>
        <title>VeganPleasure | 마이페이지</title>
      </Head>
      <UserProfile />
    </div>
  );
}

export default mypage;
