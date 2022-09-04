import React from "react";
import { useRouter } from "next/router";
import EditForm from "../../components/review/EditForm";

function EditReview(props) {
  const router = useRouter();
  const { params } = router.query;
  console.log(params[0]);
  console.log(params[1]);

  return (
    <div className="my-20 mx-5">
      <EditForm storeId={params[0]} reviewId={params[1]} />
    </div>
  );
}

export default EditReview;
