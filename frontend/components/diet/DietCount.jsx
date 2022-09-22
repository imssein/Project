import React, { useState, useEffect } from "react";
import DietService from "../../services/diet.service";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

function DietCount(props) {
  const router = useRouter();

  const [content, setContent] = useState([]);

  useEffect(() => {
    DietService.getDietsList().then(
      (response) => {
        setContent(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  console.log(content.length);
  return (
    <div className="h-screen">
      <div className="flex justify-between font-semibold">
        <button className="my-auto" onClick={() => router.push("/user/mypage")}>
          <AiOutlineArrowLeft />
        </button>
        <div className="">내가 실천한 채식</div>
        <div></div>
      </div>
      <div className="bg-bg my-6 text-center">
        <div className="pt-8 pb-3 font-semibold text-sm">
          누적 채식한끼 챌린지
        </div>
        <div className="pt-3 pb-8 text-green text-xl font-extrabold">
          {content.length}
        </div>
      </div>
    
    </div>
  );
}

export default DietCount;
