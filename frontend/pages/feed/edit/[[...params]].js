import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import EditForm from "../../../components/diets/EditForm"
function EditPost(props) {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);

  return (
    <div className=" bg-white py-6 px-6 h-screen">
        <Head>
          <title>VeganPleasure | 피드 수정</title>
        </Head>
          <EditForm id={params} />
    </div>
  );
}

export default EditPost;
