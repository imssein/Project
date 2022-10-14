import React from 'react';
import UploadImg from '../../common/UploadImg';
import StarRating from './StarRating';

function Form({onSubmit, setStarRating, showImages, setShowImages, content, onChangeContent}) {
    return (
        <div className="h-screen mb-20">
        <form onSubmit={onSubmit} className="" encType="multipart/form-data">
          <div>
            <p className="font-semibold text-gray text-lg mb-2">사진 첨부</p>
            <p className="text-sm text-gray-3 mb-2">
              음식 사진이나 메뉴판 사진을 첨부해주세요.{" "}
            </p>
            <UploadImg setShowImages={setShowImages} showImages={showImages} />
          </div>
          <div>
            <div className="my-4">{/* 식당명 */}</div>
            <div className="mt-11">
              <label className="mr-4">평점</label>
              <StarRating setStarRating={setStarRating} />
            </div>
            <div className="mt-11">
              <input
                value={content}
                onChange={onChangeContent}
                className="w-full rounded-lg h-96 px-4 border-4 border-bg outline-none"
                placeholder="식당에 대해 설명해주세요."
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

export default Form;