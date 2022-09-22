import React from "react";
import { useRouter } from "next/router";
import EditForm from "../../../components/diet/EditForm";
import Head from "next/head";
import MainLayout from "../../../components/common/MainLayout";
function EditDiet(props) {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);

  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <MainLayout>
        <Head>
          <title>VeganPleasure | 식단 수정</title>
        </Head>
        <div className="py-4 px-4">
          <EditForm id={params} />
        </div>
      </MainLayout>
    </div>
  );
}

export default EditDiet;
