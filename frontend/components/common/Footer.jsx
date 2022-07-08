import Link from "next/link";
import React from "react";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlinePlusCircle,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";

function Footer(props) {
  return (
    <footer className="flex justify-between bg-white px-4 py-4 border-t-2 ">
      <Link href="/">
        <div>
          <AiOutlineHome size="20" />
          <p className="text-xs text-center pt-2">홈</p>
        </div>
      </Link>
      <Link href="/calender">
        <div>
          <AiOutlineCalendar className="mx-auto" size="20" />
          <p className="text-xs text-center pt-2">캘린더</p>
        </div>
      </Link>
      <Link href="/postRecord">
        <div>
          <AiOutlinePlusCircle className="mx-auto" size="20" />
          <p className="text-xs text-center pt-2">식단기록</p>
        </div>
      </Link>
      <Link href="/search">
        <div>
          <AiOutlineSearch size="20" />
          <p className="text-xs text-center pt-2">검색</p>
        </div>
      </Link>
      <Link href="/mypage">
        <div>
          <AiOutlineUser className="mx-auto" size="20" />
          <p className="text-xs text-center pt-2">마이페이지</p>
        </div>
      </Link>
    </footer>
  );
}

export default Footer;
