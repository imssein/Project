import React, { useState } from "react";
import FormBtn from "../common/FormBtn";
import UploadImage from "../common/UploadImage";
import VegitarianTypes from "../common/VegitarianTypes";

function ReviewForm(props) {
  const [select, setSelect] = useState(false);

  return (
    <div>
      <form>
        <UploadImage />
        <VegitarianTypes />
        <div>
          <div>
            <p className="font-semibold text-lg mt-8">리뷰</p>
          </div>
          <div className="my-4">
            <input placeholder="플랜트"></input>
          </div>
          <div className="my-4">
            {/* 별점공간 */}
          </div>
          <div>
            <input
              className="w-full border h-96 px-4"
              placeholder="식당에 대해 설명해주세요. #해시태그를 입력해주세요."
            />
          </div>
        </div>
        <FormBtn />
        
      </form>
    </div>
  );
}

export default ReviewForm;
