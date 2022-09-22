import React from "react";
import { useRouter } from "next/router";
import { BsPlusSquare } from "react-icons/bs";
import useInput from "../../hooks/useInput";
import ReviewService from "../../services/review.service";

function EditReview({ storeId, reviewId }) {
  const router = useRouter();
  const [content, onChangeContent] = useInput("");
  const [starRating, onChangeStarRating] = useInput("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      ReviewService.editReview(
        `${storeId}`,
        `${reviewId}`,
        content,
        starRating
      ).then(
        () => {
          alert("리뷰 수정 완료");
          router.push(`/restaurants/${storeId}`);
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleForm}
        className="my-6"
        encType="multipart/form-data"
      >
        {/* <VegitarianTypes /> */}
        <div>
          <p className="font-semibold text-lg my-8">리뷰</p>
        </div>
        <div>
          <p className="font-semibold text-lg mb-2">사진 첨부</p>
          <p className="text-sm text-gray-600 mb-2">
            음식 사진이나 메뉴판 사진을 첨부해주세요.{" "}
          </p>
          {/* 이미지 */}
          {/* <input
              type="file"
              multiple
              hidden
              ref={imageInput}
              onChange={handleFileInput}
            /> */}
          <button className="my-3">
            {/* onClick={(e) => imageInput.current && imageInput.current.click()} */}
            <BsPlusSquare size="60" />{" "}
          </button>
        </div>
        <div>
          <div className="my-4">{/* 식당명 */}</div>
          <div className="my-4">
            {/* 별점공간 */}
            <input
              placeholder="별점을 매겨보세요"
              type="text"
              value={starRating}
              onChange={onChangeStarRating}
              required
            />
          </div>
          <div className="">
            <input
              value={content}
              onChange={onChangeContent}
              className="w-full border h-96 px-4"
              placeholder="식당에 대해 설명해주세요. #해시태그를 입력해주세요."
            />
          </div>
        </div>
        <div className=" flex justify-end">
          <button
            className=" text-lg py-6 font-bold text-green-900"
            type="submit"
          >
            저장하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditReview;
