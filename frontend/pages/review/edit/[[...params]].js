import React from "react";
import { useRouter } from "next/router";
import MainLayout from "../../../components/common/MainLayout";
import Head from "next/head";
import EditForm from "../../../components/review/components/EditForm";

function Edit(props) {
  const router = useRouter();
  const { params = [] } = router.query;
  
  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <MainLayout>
          <Head>
            <title>VeganPleasure | 리뷰 수정</title>
          </Head>
          <div className="px-9">
            <EditForm storeId={params[0]} reviewId={params[1]} />
          </div>
      </MainLayout>
    </div>
  );
}

export default Edit;
