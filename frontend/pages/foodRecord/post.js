import React from "react";
import Head from "next/head";
import DietForm from "../../components/diet/DietForm";
import MainLayout from "../../components/common/MainLayout";

function Post(props) {
  return (
    <MainLayout>
      <Head>
        <title>VeganPleasure | 식단 작성</title>
      </Head>
        <div className="px-9">
          <DietForm />
        </div>
    </MainLayout>
  );
}

export default Post;
