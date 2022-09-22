import React, { useRef } from "react";
import FormBtn from "../common/FormBtn";
import useInput from "../../hooks/useInput";
import ReviewService from "../../services/review.service";
import { useRouter } from "next/router";
import { BsPlusSquare } from "react-icons/bs";
import axios from "axios";
import authHeader from "../../services/auth-header";

function ReviewForm({ params }) {
  const router = useRouter();
  const ImgInput = useRef();
  const [content, onChangeContent] = useInput("");
  const [starRating, onChangeStarRating] = useInput("");

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

    const res = await axios({
      method: "POST",
      url: `http://localhost:9090/v1/api/reviews/${params}/review`,
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
    <div className="h-screen">
      <form
        onSubmit={onSubmit}
        className=""
        encType="multipart/form-data"
      >
        <div>
          <p className="font-semibold text-gray text-lg mb-2">사진 첨부</p>
          <p className="text-sm text-gray-3 mb-2">
            음식 사진이나 메뉴판 사진을 첨부해주세요.{" "}
          </p>
          {/* 이미지 */}
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
        <div>
          <div className="my-4">{/* 식당명 */}</div>
          <div className="mt-11">
            {/* 별점공간 */}
            <input
              placeholder="별점을 매겨보세요"
              type="text"
              value={starRating}
              onChange={onChangeStarRating}
              required
            />
          </div>
          <div className="mt-11">
            <input
              value={content}
              onChange={onChangeContent}
              className="w-full rounded-lg h-96 px-4 border-4 border-bg outline-none"
              placeholder="식당에 대해 설명해주세요. #해시태그를 입력해주세요."
            />
          </div>
        </div>
        <div className="mt-7 mb-24">
          <button
            type="submit"
            className="bg-bg font-semibold rounded-lg w-full h-12"
          >
            저장하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
