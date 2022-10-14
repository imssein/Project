import React, { useEffect, useCallback, useState, useRef } from "react";
import useInput from "../../hooks/useInput";
import Image from "next/image";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";
import { useRouter } from "next/router";
import axios from "axios";
import authHeader from "../../services/auth-header";
import FormData from "form-data";
import { vegetypes, classification, amountTypes } from "./Type";

import Check from "./common/Check";
import { DIET } from "../../config";
import UploadImg from "../common/UploadImg";

function DietForm(props) {
  const router = useRouter();
  const [vegetarianType, setVegetarianType] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [memo, onChangeMemo] = useInput("");
  const [showImages, setShowImages] = useState([])

  const checkbox = (checkThis) => {
    const checkbox = document.getElementsByName("vegetarianType");
    for (const i = 0; i < checkbox.length; i++) {
      if (checkbox[i] !== checkThis) {
        checkbox[i].checked = false;
      }
      setVegetarianType(checkThis.value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const multipartFiles = e.target.multipartFiles.files; //form의 input을 갖고옴
    const formData = new FormData();
    for (const i = 0; i < multipartFiles.length; i++) {
      formData.append("requestFiles", multipartFiles[i]);
    }
    const requestData = {
      vegetarianType,
      amount,
      memo,
      type,
    };

    const json = JSON.stringify(requestData);
    const blob = new Blob([json], { type: "application/json" });
    formData.append("requestData", blob);
    for (const value of formData.values()) {
      console.log(value);
    }
    const res = await axios({
      method: "POST",
      url: `${DIET.DIETSLIST}/diet`,
      mode: "cors",
      headers: authHeader(),
      data: formData,
    }).then(() => {
      router.push("/foodRecord/all");
      alert("식단 기록 업로드 성공");
    });
    console.log(res);
  };
  console.log(vegetarianType)
  console.log()
  return (
    <form className="px-9 pb-24 " encType="multipart/form-data" onSubmit={onSubmit}>
      <div>
        <p className="font-semibold">사진 첨부</p>
        <p className="text-sm text-gray-600 pb-1">
          오늘 먹은 사진을 올려주세요.{" "}
        </p>
        <UploadImg setShowImages={setShowImages} showImages={showImages} />

        
       
      </div>
      {/* 채식타입 */}
      <div>
        <div className="flex justify-between my-6">
          <p className="font-semibold">채식 타입 선택</p>
          <Link href="/information/vegetarian ">
            <p className="text-xs cursor-pointer flex my-auto">
              채식 타입 안내
              <AiFillCaretRight />
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-4">
          {vegetypes.map((item) => (
            <label key={item.id}>
              <input
                type="checkbox"
                className="hidden peer"
                name="vegetarianType"
                value={item.title}
                onChange={(e) => checkbox(e.target)}
              />
              <div className="mt-2 w-14 h-14 pt-1 text-xs mr-2 md:w-16 md:h-16 md:pt-2 md:mx-2 rounded-full border border-gray-3 text-center hover:bg-main   peer-checked:bg-main">
                <Image
                  src={`/images/${item.file}`}
                  width={25}
                  height={25}
                  alt="채식사진"
                />
                <p className="text-xs text-gray-3  text-center">
                  {item.title}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>
      <Check title="식사량" checkType="amount" type={amountTypes} setType={setAmount} />
      <Check title="분류" checkType="type" type={classification} setType={setType} />
      <div>
          <p className="font-semibold mt-8 mb-6">메모</p>
          <input
            value={memo}
            onChange={onChangeMemo}
            className="placeholder:text-gray-1 w-full border border-gray-2 px-4 h-96 outline-none"
            placeholder="간단한 메모를 남겨주세요. (선택)"
          />
      </div>
      <button
        className="float-right text-lg pt-6 pb-32 font-bold text-green"
        type="submit"
      >
        저장하기
      </button>
    </form>
  );
}

export default DietForm;
