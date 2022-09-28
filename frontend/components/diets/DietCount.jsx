import React, { useContext }  from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import { DietsContext } from "../../contexts/Diets";

function DietCount(props) {
  const router = useRouter();
  const content = useContext(DietsContext);

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
