import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import MainLayout from "../../../components/common/MainLayout";
import EditForm from "../../../components/feed/components/EditForm";

function EditPost(props) {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);

  return (
    <MainLayout>
           <Head>
        <title>VeganPleasure | 피드 작성</title>
      </Head>
      <div className="px-9">        
        <EditForm id={params} />
        </div>
    </MainLayout>
  );
}

export default EditPost;
