import Link from "next/link";
import React, {useState, useEffect} from "react";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlinePlusCircle,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineMessage,
} from "react-icons/ai";
import AuthService from "../../services/auth.service";

function SubMenu(props) {
  const [ isLoggedIn, setIsLoggedIn] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if(user){
      setIsLoggedIn(user);
    }
  }, []);

  return (
    <footer className="flex justify-between px-4 py-3 fixed bottom-0 bg-slate-100 max-w-2xl w-full">
      <Link href="/">
        <div>
          <AiOutlineHome size="20" />
          <p className="text-xs text-center pt-2">홈</p>
        </div>
      </Link>
      <Link href="/feedPage">
        <div>
          <AiOutlineMessage className="mx-auto" size="20" />
          <p className="text-xs text-center pt-2">피드</p>
        </div>
      </Link>
      <Link href="/writeFeed">
        <div>
          <AiOutlinePlusCircle className="mx-auto" size="20" />
          <p className="text-xs text-center pt-2">피드추가</p>
        </div>
      </Link>
      <Link href="/dietPage">
        <div>
          <AiOutlineCalendar size="20" />
          <p className="text-xs text-center pt-2">식단</p>
        </div>
      </Link>
      {isLoggedIn ? (
        <Link href="/mypage">
          <div>
            <AiOutlineUser className="mx-auto" size="20" />
            <p className="text-xs text-center pt-2">마이페이지</p>
          </div>
        </Link>
      ) : (
        <Link href="/login">
          <div>
            <AiOutlineUser className="mx-auto" size="20" />
            <p className="text-xs text-center pt-2">로그인</p>
          </div>
        </Link>
      )}
    </footer>
  );
}

export default SubMenu;
