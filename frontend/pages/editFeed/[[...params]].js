import React from "react";
import { useRouter } from "next/router";
import EditForm from "../../components/feed/EditForm";

function EditPost(props) {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);

  return (
    <div className="my-20 mx-5">
      <EditForm id={params} />
    </div>
  );
}

export default EditPost;
