import Link from "next/link";
import React from "react";
import { BsPencilFill, BsListUl, BsLightbulb } from "react-icons/bs";
import Button from "./common/Button";

function CalendarBtn(props) {
  return (
    <div>
      <Button
        title="오늘의 식단 기록"
        subTitle="오늘은 무엇을 먹었나요?"
        src="/foodRecord/post"
        btnTitle="기록하기"
        logo={<BsPencilFill size="25" className="mr-6 my-auto flex-none" />}
      />
      <div className="mt-3">
        <Button
          title="나의 채식 현황"
          subTitle="채식 현황 한눈에 보기"
          src="/foodRecord/trend"
          btnTitle="보러가기"
          logo={<BsLightbulb size="25" className="mr-6 my-auto flex-none" />}
        />
      </div>
      <div className="mt-3">
        <Button
          title="나의 식단 목록"
          subTitle="이곳에 다 모아 두었어요"
          src="/foodRecord/all"
          btnTitle="확인하기"
          logo={<BsListUl size="25" className="mr-6 my-auto flex-none" />}
        />
      </div>
    </div>
  );
}

export default CalendarBtn;
