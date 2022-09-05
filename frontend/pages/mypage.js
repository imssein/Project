import React from "react";
import UserProfile from "../components/user/UserProfile";
import Head from "next/head";
import MainLayout from "../components/common/MainLayout";

function mypage(props) {
  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <MainLayout>
        <div className="py-6 px-6">
          <Head>
            <title>VeganPleasure | 마이페이지</title>
          </Head>
          <UserProfile />
        </div>
      </MainLayout>
    </div>
  );
}

export default mypage;
