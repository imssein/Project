import React, { useEffect, useCallback, useState, useRef } from "react";
import { BsPlusSquare } from "react-icons/bs";
import useInput from "../../hooks/useInput";
import Image from "next/image";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";
import { useRouter } from "next/router";
import DietService from "../../services/diet.service";
import axios from "axios";
import authHeader from "../../services/auth-header";
import FormData from "form-data";

const vegetypes = [
  {
    id: 1,
    title: "비건",
    value: "vegan",
    file: "vegan.png",
  },
  {
    id: 2,
    title: "락토",
    value: "lacto",
    file: "lacto.png",
  },
  {
    id: 3,
    title: "오보",
    value: "ovo",
    file: "ovo.png",
  },
  {
    id: 4,
    title: "락토오보",
    value: "lactovo",
    file: "lactoovo.png",
  },
  {
    id: 5,
    title: "페스코",
    value: "pesco",
    file: "pesco.png",
  },
];

const classification = [
  {
    id: 1,
    value: "breakfast",
    title: "아침",
  },
  {
    id: 2,
    value: "brunch",
    title: "아점",
  },
  {
    id: 3,
    value: "lunch",
    title: "점심",
  },
  {
    id: 4,
    value: "linner",
    title: "점저",
  },
  {
    id: 5,
    value: "dinner",
    title: "저녁",
  },
];

const amountTypes = [
  {
    id: 1,
    value: "little",
    title: "조금",
  },
  {
    id: 2,
    value: "normal",
    title: "보통",
  },
  {
    id: 3,
    value: "many",
    title: "많이",
  },
];

function DietForm(props) {
  const router = useRouter();
  const [vegetarianType, setVegetarianType] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [memo, onChangeMemo] = useInput("");
  const ImgInput = useRef();

  const checkbox = (checkThis) => {
    const checkbox = document.getElementsByName("vegetarianType");
    for (const i = 0; i < checkbox.length; i++) {
      if (checkbox[i] !== checkThis) {
        checkbox[i].checked = false;
      }
      setVegetarianType(checkThis.value);
    }
  };
  const checkbox2 = (checkThis) => {
    const checkbox = document.getElementsByName("amount");
    for (const i = 0; i < checkbox.length; i++) {
      if (checkbox[i] !== checkThis) {
        checkbox[i].checked = false;
      }
      setAmount(checkThis.value);
    }
  };
  const checkbox3 = (checkThis) => {
    const checkbox = document.getElementsByName("type");
    for (const i = 0; i < checkbox.length; i++) {
      if (checkbox[i] !== checkThis) {
        checkbox[i].checked = false;
      }
      setType(checkThis.value);
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
      url: "http://localhost:9090/v1/api/diets/diet",
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
    <form className="my-6" encType="multipart/form-data" onSubmit={onSubmit}>
      <div>
        <p className="font-semibold text-lg">사진 첨부</p>
        <p className="text-sm text-gray-600 pb-1">
          오늘 먹은 사진을 올려주세요.{" "}
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
      {/* 채식타입 */}
      <div>
        <div className="flex justify-between my-6">
          <p className="font-semibold text-lg ">채식 타입 선택</p>
          <Link href="/information/vegetarian ">
            <p className="text-xs cursor-pointer flex my-auto">
              채식 타입 안내
              <AiFillCaretRight />
            </p>
          </Link>
        </div>
        <div className="flex">
          {vegetypes.map((item) => (
            <label key={item.id}>
              <input
                type="checkbox"
                className="hidden peer"
                name="vegetarianType"
                value={item.title}
                onChange={(e) => checkbox(e.target)}
              />

              <div className="mx-2 rounded-full border-2 text-center w-16 h-16 pt-2 hover:bg-main   peer-checked:bg-main">
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
      {/* 양 */}
      <div className="my-6">
        <p className="font-semibold text-lg my-3">식사량</p>
        <div className="flex">
          {amountTypes.map((item) => (
            <label key={item.id}>
              <input
                type="checkbox"
                className="hidden  peer"
                name="amount"
                value={item.title}
                onChange={(e) => checkbox2(e.target)}
              />
              <p className="text-gray-3 mx-2 rounded-full border-2 py-2 px-4 0 hover:bg-main   peer-checked:bg-main">
                {item.title}
              </p>
            </label>
          ))}
        </div>
      </div>
      <div className="my-6">
        <p className="font-semibold text-lg my-3">분류</p>
        <div className="flex">
          {classification.map((item) => (
            <label key={item.id}>
              <input
                type="checkbox"
                className="hidden  peer"
                name="type"
                value={item.title}
                onChange={(e) => checkbox3(e.target)}
              />
              <p className="text-gray-3 mx-2 rounded-full border-2 py-2 px-4  hover:bg-main   peer-checked:bg-main">
                {item.title}
              </p>
            </label>
          ))}
        </div>
      </div>
      <div>
        <div>
          <p className="font-semibold text-lg mt-8">메모</p>
        </div>
        <div>
          <input
            value={memo}
            onChange={onChangeMemo}
            className="text-gray-3 w-full border h-96 px-4 outline-none"
            placeholder="간단한 메모를 남겨주세요. (선택)"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="mb-32 text-lg pt-6 font-bold text-green"
          type="submit"
        >
          저장하기
        </button>
      </div>
    </form>
  );
}

export default DietForm;
