import React from "react";
import Head from "next/head";
import DietForm from "../components/diet/DietForm";
import MainLayout from "../components/common/MainLayout";

function WriteDiet(props) {
  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <Head>
        <title>VeganPleasure | 식단 작성</title>
      </Head>
      <MainLayout>
        <div className="py-5 px-5">
          <DietForm />
        </div>
      </MainLayout>
    </div>
  );
}

export default WriteDiet;
