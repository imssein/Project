import React, { useEffect, useCallback, useState, useRef } from "react";
import { BsPlusSquare } from "react-icons/bs";
import useInput from "../../hooks/useInput";
import Image from "next/image";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";
import { useRouter } from "next/router";
import DietService from "../../services/diet.service";

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
  }
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
  // const imageInput = useRef();

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
  console.log(vegetarianType);
  console.log(amount);
  console.log(type);

  const onSubmit = async (e) => {
      e.preventDefault();
      try {
      DietService.createDiet(vegetarianType, amount, memo, type).then(
        () => {
          alert("식단 업로드 완료")
          router.push("/dietPage")
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
    <form className="my-6" encType="multipart/form-data" onSubmit={onSubmit}>
      <div>
        <p className="font-semibold text-lg">사진 첨부</p>
        <p className="text-sm text-gray-600">오늘 먹은 사진을 올려주세요 : )</p>
        <button className="my-3">
          <BsPlusSquare size="60" />{" "}
        </button>
      </div>
      {/* 채식타입 */}
      <div>
        <div className="flex justify-between my-6">
          <p className="font-semibold text-lg ">채식 타입 선택</p>
          <Link href="/information ">
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
                value={item.value}
                onChange={(e) => checkbox(e.target)}
              />
              
              <p className="mx-2 rounded-full border-2 text-center w-16 h-16 pt-2 hover:bg-lime-200   peer-checked:bg-lime-500">
              <Image src={`/images/${item.file}`} width={25} height={25} alt="채식사진" />
              <p className="text-xs text-gray-700  text-center">{item.title}</p>
              </p>
            
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
                value={item.value}
                onChange={(e) => checkbox2(e.target)}
              />
              <p className=" mx-2 rounded-full border-2 py-2 px-4 0 hover:bg-lime-200   peer-checked:bg-lime-500">
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
                value={item.value}
                onChange={(e) => checkbox3(e.target)}
              />
              <p className=" mx-2 rounded-full border-2 py-2 px-4 peer-checked:border-slate-400 hover:bg-lime-200   peer-checked:bg-lime-500">
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
            className="w-full border h-96 px-4"
            placeholder="간단한 메모를 남겨주세요. (선택)"
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
  );
}

export default DietForm;
