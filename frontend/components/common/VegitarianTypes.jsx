import React from 'react';
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";
import { IoLeafOutline, IoFishOutline } from "react-icons/io5";
import { TbCheese } from "react-icons/tb";
import { BsEgg } from "react-icons/bs";
import Image from "next/image";

function VegitarianTypes(props) {
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
          <div className="flex my-6 text-sm  font-bold justify-center">
            <button
              vlaue="vegan"
              className="rounded-full border border-green-900 px-7 py-4 mr-2"
            >
              <IoLeafOutline size="25" />
              비건
            </button>
            <button
              vlaue="lacto"
              className="rounded-full border border-green-900 px-7 py-4 mr-2"
            >
              <TbCheese size="25" />
              락토
            </button>
            <button
              vlaue="ovo"
              className="rounded-full border border-green-900 px-7 py-4 mr-2"
            >
              <BsEgg size="25" />
              오보
            </button>
            <button
              vlaue="lactoovo"
              className="rounded-full border border-green-900 px-4 py-3 mr-2"
            >
              <Image
                src="/images/lactoovologo.png"
                height="25"
                width="25"
                alt="락토오보"
              />
              <p>락토오보</p>
            </button>
            <button
              vlaue="pesco"
              className="rounded-full border border-green-900 px-5 py-3 mr-2"
            >
              <IoFishOutline size="25" className="mx-auto" />
              페스코
            </button>
          </div>
          </div>
    );
}

export default VegitarianTypes;