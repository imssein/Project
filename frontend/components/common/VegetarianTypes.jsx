import React from "react";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";
import { IoLeafOutline, IoFishOutline } from "react-icons/io5";
import { TbCheese } from "react-icons/tb";
import { BsEgg } from "react-icons/bs";
import Image from "next/image";

function VegetarianTypes(props) {
  function clickCheck(target) {
    
  }
  return (
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
      <div className="text-sm font-bold flex justify-between">
        <div className="form-check  text-center ">
          <label className="rounded-full">
            <input
              type="checkbox"
              value="vegan"
              name="vegetarian"
              vlaue="vegan"
              className="accent-lime-800"
              onClick="clickCheck(this)"
            />
            <IoLeafOutline size="25" />
            비건
          </label>
        </div>
        <div className=" form-check text-center ">
          <label className="rounded-full">
            <input
              type="checkbox"
              value="lacto"
              name="vegetarian"
              onClick="clickCheck(this)"
              className="accent-lime-800"
            />
            <TbCheese size="25" />
            락토
          </label>
        </div>
        <div className=" form-check text-center">
          <label className="rounded-full">
            <input
              type="checkbox"
              value="ovo"
              name="vegetarian"
              onClick="clickCheck(this)"
              className="accent-lime-800"
            />
            <BsEgg size="25" />
            오보
          </label>
        </div>
        <div className="form-check  text-center">
          <label className="rounded-full">
            <input
              type="checkbox"
              value="lactoovo"
              name="vegetarian"
              onClick="clickCheck(this)"
              className="accent-lime-800"
            />
            <div>
              <Image
                src="/images/lactoovologo.png"
                height="25"
                width="25"
                alt="락토오보"
              />
            </div>
            <p>락토오보</p>
          </label>
        </div>
        <div className=" form-check  text-center">
          <label className="rounded-full ">
            <input
              type="checkbox"
              value="pesco"
              name="vegetarian"
              onClick="clickCheck(this)"
              className="accent-lime-800"
            />
            <IoFishOutline size="25" />
            페스코
          </label>
        </div>
      </div>
    </div>
  );
}

export default VegetarianTypes;
