import React from "react";
import { useContext } from "react";
import { AiFillSmile } from "react-icons/ai";
import { DietsContext } from "../../contexts/Diets";
import Button from "./common/Button";
import Impact from "./common/Impact";

function Diets(props) {
  const content = useContext(DietsContext);

  return (
    <div className="h-full">
      <div className="text-center">
        <div className="px-6 py-2 text-gray border-b-2 border-green inline-block  font-bold text-xl">
          채식한끼 챌린지
        </div>
        <div>
          <div className="my-10 py-8 px-8 rounded-full bg-bg inline-block">
            <p className="text-sm pt-2">이번달 성공 횟수 </p>
            <p className="font-semibold text-2xl pt-2 text-green">
              {content.length}
            </p>
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
            <table className="table-auto">
      <thead>
      <tr>
        <th className="px-4"></th>
        <th className="px-16"></th>
        <th></th>
        </tr>
      </thead>
      <tbody>
      <Impact icon="🌍" title="탄소배출량" calc={3 * content.length} unit="kg" />
              <Impact
                icon="🌾"
                title="곡식"
                calc={(6.7 * content.length).toFixed(2)}
                unit="kg"
              />
              <Impact
                icon="💧"
                title="물"
                calc={(1.388 * content.length).toFixed(2)}
                unit="L"
              />
              <Impact icon="🌳" title="삼림지" calc={1 * content.length} unit="㎡" />
              <Impact
                icon="🐮"
                title="동물"
                calc={(0.3 * content.length).toFixed(1)}
                unit="마리"
              />
      </tbody>
    </table>
             
            </div>
            <div className="flex justify-center">
              <div className="mr-3">
                <Button src="/foodRecord/post" title="채식한끼 참여하기" />
              </div>
              <div>
                <Button src="/foodRecord/calendar" title="채식기록 보러가기" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diets;
