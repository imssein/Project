import axios from "axios";
import FormData from "form-data";
import React from "react";
import { useRef, useState } from "react";
import authHeader from "../../services/auth-header";
import useInput from "../../hooks/useInput";
import { BsPlusSquare } from "react-icons/bs";
import { useRouter } from "next/router";
import Image from "next/image";

function FeedForm(props) {
  const ImgInput = useRef();
  const [title, onChangeTitle] = useInput("");
  const [content, onChangeContent] = useInput("");
  const [hashTags, setHashTags] = useState([]);
  const [previewImg, setPreviewImg] = useState("");
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
      url: "http://localhost:9090/v1/api/posts/post",
      mode: "cors",
      headers: authHeader(),
      data: formData,
    }).then(() => {
      router.push("/feed");
      alert("게시글 업로드 성공");
    });
    console.log(res);
  };

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data" className="my-3">
      <div>
        <p className="font-semibold text-lg pb-2">사진 첨부</p>
        <p className="text-sm text-gray-600 pb-1">
          음식 사진이나 메뉴판 사진을 첨부해주세요.{" "}
        </p>
        <input
          ref={ImgInput}
          type="file"
          id="Img"
          accept="image/*"
          name="multipartFiles"
          multiple
          hidden
        />
        <button
          className="my-3"
          onClick={(e) => ImgInput.current && ImgInput.current.click()}
        >
          <BsPlusSquare size="60" />{" "}
        </button>
      </div>
      <input
        className="border-b-2 border-green w-full px-2  outline-none bg-gray-4 py-2"
        value={title}
        onChange={onChangeTitle}
        placeholder="제목"
      />
      <input
        className="border-b-2 border-green w-full px-2 outline-none bg-gray-4 py-2"
        value={hashTags}
        onChange={handleHashTags}
        placeholder="해쉬태그"
      />
      <input
        value={content}
        onChange={onChangeContent}
        className="w-full border-2 border-green h-96 px-4 my-6 outline-none bg-gray-4"
        placeholder="채식에 대한 이야기를 자유롭게 공유해주세요 #해시태그를 입력해주세요."
      />
      <button
        type="submit"
        className="mb-36 font-semibold rounded-lg bg-bg w-full h-12 text-green"
      >
        저장하기
      </button>{" "}
    </form>
  );
}

export default FeedForm;
