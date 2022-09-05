import React from "react";
import { useRouter } from "next/router";
import EditForm from "../../components/feed/EditForm";
import SubLayout from "../../components/common/SubLayout";
import Head from "next/head";
function EditPost(props) {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);

  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <SubLayout>
        <Head>
          <title>VeganPleasure | 피드 수정</title>
        </Head>
        <div className="my-20 mx-5">
          <EditForm id={params} />
        </div>
      </SubLayout>
    </div>
  );
}

export default EditPost;
