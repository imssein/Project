import React from "react";
import UploadImg from "../../common/UploadImg";
import HashTags from "./HashTags";

function Form({
  hashTags,
  handleHashTags,
  hashArr,
  setHashArr,
  setHashTags,
  title,
  onChangeTitle,
  onSubmit,
  content,
  onChangeContent,
  setShowImages,
  showImages,
}) {
  console.log(hashArr)
  return (
    <div className="h-screen mb-20">
      <form onSubmit={onSubmit} className="" encType="multipart/form-data">
        <div>
          <p className="font-semibold text-gray text-lg mb-2">사진 첨부</p>
          <p className="text-sm text-gray-3 mb-2">
            자유롭게 사진을 올려주세요 !
          </p>
          <UploadImg setShowImages={setShowImages} showImages={showImages} />
        </div>
        <div>
          <div>
            <input
              className="border-b-2 border-bg w-full px-2  outline-none bg-gray-4 py-2"
              value={title}
              onChange={onChangeTitle}
              placeholder="제목"
            />
            <HashTags
              hashTags={hashTags}
              setHashArr={setHashArr}
              setHashTags={setHashTags}
              hashArr={hashArr}
              handleHashTags={handleHashTags}
            />
         <div className="flex mt-4">
          {hashTags && hashTags.map((item) => (
            <div key={item.id} className="bg-bg rounded-full mr-2 py-2 px-3 text-sm text-gray-3">#{item}</div>
          ))}
       
         </div>

          </div>
          <div className="mt-11">
            <input
              value={content}
              onChange={onChangeContent}
              className="w-full rounded-lg h-96 px-4 border-4 border-bg outline-none"
              placeholder="자유롭게 글을 작성해주세요"
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
