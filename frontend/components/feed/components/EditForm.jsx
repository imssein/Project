import React, { useState } from "react";
import useInput from "../../../hooks/useInput";
import { useRouter } from "next/router";
import Form from "../common/Form";
import axios from "axios";
import { POST } from "../../../config"
import authHeader from "../../../services/auth-header";

function EditForm({id}) {
  const [title, onChangeTitle] = useInput("");
  const [content, onChangeContent] = useInput("");
  const [hashTags, setHashTags] = useState([]);
  const [showImages, setShowImages] = useState([]);
  const router = useRouter();

    const handleHashTags = (e) => {
      e.preventDefault();
      setHashTags([e.target.value]);
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      const multipartFiles = e.target.multipartFiles.files; //form의 input을 갖고옴
      const formData = new FormData();
  
      for (const i = 0; i < multipartFiles.length; i++) {
        formData.append("requestFiles", multipartFiles[i]);
      }
  
      const requestData = {
        content,
        title,
        hashTags,
      };
  
      const json = JSON.stringify(requestData);
      const blob = new Blob([json], { type: "application/json" });
      formData.append("requestData", blob);
  
      for (const value of formData.values()) {
        console.log(value);
      }
  
      const res = await axios({
        method: "POST",
        url: `${POST.POST_LIST}/${id}`,
        mode: "cors",
        headers: authHeader(),
        data: formData,
      }).then(() => {
        router.push("/feed");
        alert("게시글 수정");
      });
      console.log(res);
    };

      return (
        <Form
        onChangeContent={onChangeContent}
        onSubmit={onSubmit}
        title={title}
        content={content}
        onChangeTitle={onChangeTitle}
        setShowImages={setShowImages}
        showImages={showImages}
        hashTags={hashTags}
        handleHashTags={handleHashTags}
      />
      )
}

export default EditForm;