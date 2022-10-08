import React from "react";
import Head from "next/head";
import MainLayout from "../../components/common/MainLayout";
import DietForm from "../../components/diets/DietForm";

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
