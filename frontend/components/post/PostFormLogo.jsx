import Link from "next/link";
import React from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";

function PostFormLogo(props) {
  return (
    <div className="flex text-gray-800 mb-7 justify-center ">
      <div className="text-xl font-semibold border-slate-400 border-2 self-center px-12 py-4 rounded-lg mr-3">
        <Link href="/mypage">내피드</Link>
      </div>
      <Link href="/feed">
        <div className="text-xl font-semibold border-slate-400 border-2 self-center  flex px-8 py-4 border-l-2 rounded-lg">
          <HiOutlinePencilAlt className="mx-auto" size="25" />
          <p className="ml-2">글쓰기</p>
        </div>
      </Link>
    </div>
  );
}

export default PostFormLogo;
