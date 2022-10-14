import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlineBulb,
} from "react-icons/ai";
import AuthService from "../../services/auth.service";

function MainMenu(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const item = "내주변";
  const query = encodeURIComponent(item);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setIsLoggedIn(user);
    }
  }, []);

  return (
    <footer className="z-50 bg-white border-t border-t-gray-2 py-4 fixed flex justify-around  bottom-0 bg-slate-100 max-w-2xl w-full text-text-green font-semibold">
      <Link href="/feed">
        <div>
          <AiOutlineMessage className="mx-auto" size="20" />
          <p className="text-xs text-center pt-2">피드</p>
        </div>
      </Link>
      <Link href="/foodRecord">
        <div>
          <AiOutlineBulb size="20" className="mx-auto"/>
          <p className="text-xs text-center pt-2 ">채식한끼</p>
        </div>
      </Link>
      <Link href="/feed/post">
        <div>
          <AiOutlinePlusCircle size="20" className="mx-auto"/>
          <p className="text-xs text-center pt-2 ">글쓰기</p>
        </div>
      </Link>
      <Link
        href={{ pathname: "/search", query: { query } }}
        as={`/search?query=${item}`}
      >
        <div>
          <AiOutlineSearch className="mx-auto" size="20" />
          <p className="text-xs text-center pt-2">내주변</p>
        </div>
      </Link>

      {isLoggedIn ? (
        <Link href="/user/mypage">
          <div>
            <AiOutlineUser className="mx-auto" size="20" />
            <p className="text-xs text-center pt-2">마이페이지</p>
          </div>
        </Link>
      ) : (
        <Link href="/user/login">
          <div>
            <AiOutlineUser className="mx-auto" size="20" />
            <p className="text-xs text-center pt-2">로그인</p>
          </div>
        </Link>
      )}
    </footer>
  );
}

export default MainMenu;
