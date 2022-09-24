import Link from "next/link";
import React from "react";
import { BsPencilFill, BsListUl, BsLightbulb} from "react-icons/bs";

function CalendarBtn(props) {
  return (
    <div className="">
      <div className="bg-main py-3 rounded-2xl px-5">
        <div className="flex ">
            <BsPencilFill size="25" className="mr-6 my-auto flex-none"/>
        <div className="grow">
            <p className="font-semibold">오늘의 식단 기록</p>
            <p className="text-xs mt-1">오늘은 무엇을 먹었나요?</p>
        </div>
        <Link href="/foodRecord/post">
        <button className="flex-none my-auto bg-text-color rounded-full py-2 px-3 text-gray-2">
            기록하기
        </button>
        </Link>
        </div>
      </div>
      <div className="bg-main py-3 rounded-2xl px-5 mt-3">
        <div className="flex ">
            <BsLightbulb size="25" className="mr-6 my-auto flex-none"/>
        <div className="grow">
            <p className="font-semibold">나의 채식 현황</p>
            <p className="text-xs mt-1">채식 현황 한눈에 보기</p>
        </div>
        <Link href="/foodRecord/trend">
        <button className="flex-none my-auto bg-text-color rounded-full py-2 px-3 text-gray-2">
            보러가기
        </button>
        </Link>
        </div>
      </div>
      <div className="bg-main py-3 rounded-2xl px-5 mt-3">
        <div className="flex ">
            <BsListUl size="25" className="mr-6 my-auto flex-none"/>
        <div className="grow">
            <p className="font-semibold">나의 식단 목록</p>
            <p className="text-xs mt-1">이곳에 다 모아 두었어요</p>
        </div>
        <Link href="/foodRecord/all">
        <button className="flex-none my-auto bg-text-color rounded-full py-2 px-3 text-gray-2">
            확인하기
        </button>
        </Link>
        </div>
      </div>

    </div>
  );
}

export default CalendarBtn;
