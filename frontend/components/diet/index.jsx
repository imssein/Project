import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DietService from "../../services/diet.service";
import { AiFillSmile, AiOutlineInfo } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

function Diet(props) {
  const now = new Date();
  const todayMonth = now.getMonth() + 1;
  const router = useRouter();
  const [content, setContent] = useState([]);
  const [level, setLevel] = useState("");
  const [icon, setIcon] = useState("");

  console.log(todayMonth);

  useEffect(() => {
    DietService.getDietsList().then(
      (response) => {
        setContent(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [setContent]);

  useEffect(() => {
    if (content.length <= 30) {
      setLevel("씨앗");
      setIcon(<AiOutlineInfo />);
    } else if (content.length <= 60) {
      setLevel("새싹");
    } else if (content.length <= 120) {
      setLevel("열매");
    } else {
      setLevel("나무");
    }
  }, [content.length]);

  return (
    <div>
      <div className="text-center">
        <div className="px-6 py-2 text-gray border-b-2 border-green inline-block  font-bold text-xl">
          채식한끼 챌린지
        </div>
        {/* 달력 - 달별 채식 채운 횟수 */}
        <div>
          <div className="my-10 py-8 px-8 rounded-full bg-bg inline-block ">
            <p className="text-sm pt-2">이번달 성공 횟수 </p>
            <p className="font-semibold text-2xl pt-2 text-green">
              {content.length}
            </p>
          </div>
          <div className="flex justify-between mt-4">
          
          <div className="flex">
          <AiFillSmile size={25} className="text-green my-auto" />

              <p className="mx-2">채식 레벨</p>
              <p>{level}</p>
            </div>
            <div className="text-xs my-auto cursor-pointer">
              <Link href="/information/ranking">
                <div className="flex">
                  <AiOutlineInfo className="my-auto" />
                  <p>채식 레벨이란?</p>
                </div>
              </Link>
            </div>
           
           
          </div>
          <div className="text-left">
            <div className="text-left mt-11 flex ">
              <AiFillSmile size={25} className="text-green my-auto" />
              <p className="ml-2">내가 만든 임팩트</p>
            </div>
            <div className="mt-3 flex">
              <p className="my-auto mr-1 text-semibold">총</p>
              <p className="text-2xl font-bold text-green">
                {content.length}끼
              </p>
              <p className="my-auto text-semibold">의 채식 인증 성공!</p>
            </div>
            <div className="text-xs">
              우리가 힘을 모아 아래와 같은 좋은 영향력을 만들어 냈습니다.
            </div>

            <div className="mt-11">
              <div className="flex">
                <p className="">탄소배출량</p>
                <p className="text-green font-bold">
                  {3 * content.length}
                </p>{" "}
                <p>kg</p>
              </div>
              <div className="flex">
                <p>곡식</p>
                <p className="text-green font-bold">
                  {6.7 * content.length}
                </p>{" "}
                <p>kg</p>
              </div>
              <div className="flex">
                <p>물</p>
                <p className="text-green font-bold">
                  {1.388 * content.length}
                </p>{" "}
                <p>L</p>
              </div>
              <div className="flex">
                <p>삼림지</p>
                <p className="text-green font-bold">
                  {1 * content.length}
                </p>{" "}
                <p>㎡</p>
              </div>
              <div className="flex">
                <p>동물</p>
                <p className="text-green font-bold">
                  {(0.3 * content.length).toFixed(1)}
                </p>{" "}
                <p>마리</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mt-16 text-center mr-3">
                <Link href="/foodRecord/post">
                  <button className="py-2 px-6 font-semibold rounded-lg bg-bg inline-block h-12 text-green">
                    채식한끼 참여하기
                  </button>
                </Link>
              </div>
              <div className="mt-16 text-center">
                <Link href="/foodRecord/calendar">
                  <button className="py-2 px-6 font-semibold rounded-lg bg-yellow inline-block h-12 text-green">
                    채식기록 보러가기
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diet;
