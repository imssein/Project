import React, { useState } from "react";
import useInput from "../../../hooks/useInput";
import { useRouter } from "next/router";
import axios from "axios";
import authHeader from "../../../services/auth-header";

import { REVIEW} from "../../../config";
import Form from "../common/Form";

function ReviewForm({ params }) {
  const router = useRouter();
  const [showImages, setShowImages] = useState([]);
  const [content, onChangeContent] = useInput("");
  const [starRating, setStarRating] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const multipartFiles = e.target.multipartFiles.files; //form의 input을 갖고옴
    const formData = new FormData();

    for (const i = 0; i < multipartFiles.length; i++) {
      formData.append("requestFiles", multipartFiles[i]);
    }

    const requestData = {
      content,
      starRating,
    };

    const json = JSON.stringify(requestData);
    const blob = new Blob([json], { type: "application/json" });
    formData.append("requestData", blob);

    for (const value of formData.values()) {
      console.log(value);
    }
    console.log("data", formData)
    const res = await axios({
      method: "POST",
      url: `${REVIEW.REVIEW}/${params}/review`,
      mode: "cors",
      headers: authHeader(),
      data: formData,
    }).then(() => {
      router.push(`/restaurants/${params}`);
      alert("리뷰 업로드 성공");
    });
    console.log(res);
  };

  return (
    <Form onSubmit={onSubmit} setStarRating={setStarRating} showImages={showImages} setShowImages={setShowImages} content={content} onChangeContent={onChangeContent} />

  );
}

export default ReviewForm;
