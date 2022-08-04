import React from "react";
import FormBtn from "../common/FormBtn";
import UploadImage from "../common/UploadImage";
import VegitarianTypes from "../common/VegitarianTypes";
function FeedForm(props) {
  return (
    <form className="my-6">
      <UploadImage />
      <VegitarianTypes />
      <div>
        <div>
          <p className="font-semibold text-lg mt-8">피드</p>
        </div>
        <div className="my-4">
          <input className="border-b-2 w-full" />
        </div>
        <div>
          <input
            className="w-full border h-96 px-4"
            placeholder="채식에 대한 이야기를 자유롭게 공유해주세요 #해시태그를 입력해주세요."
          />
        </div>
      </div>

      <div className=" flex justify-end">
        <FormBtn />
      </div>
    </form>
  );
}

export default FeedForm;
