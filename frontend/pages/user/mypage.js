import React from "react";
import Head from "next/head";
import UserProfile from "../../components/member/UserProfile";
import Nav from "../../components/common/Nav";
import MainMenu from "../../components/common/MainMenu";

function mypage(props) {
  return (
    <div className="h-screen">
          <Head>
            <title>VeganPleasure | 마이페이지</title>
          </Head>
          <Nav />
          <div className="py-9 px-9">
          <UserProfile />
          </div>
          <MainMenu />
    </div>
  );
}

export default mypage;
