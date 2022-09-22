import React from "react";
import { useRouter } from "next/router";
import EditForm from "../../components/review/EditForm";
import MainLayout from "../../../components/common/MainLayout";
import Head from "next/head";

function EditReview(props) {
  const router = useRouter();
  const { params } = router.query;
  console.log(params[0]);
  console.log(params[1]);

  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <MainLayout>
          <Head>
            <title>VeganPleasure | 리뷰 수정</title>
          </Head>
          <div className="my-20 mx-5">
            <EditForm storeId={params[0]} reviewId={params[1]} />
          </div>
      </MainLayout>
    </div>
  );
}

export default EditReview;
