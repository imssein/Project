import Link from "next/link";
import React from "react";

function LoginForm(props) {
  return (
    <form>
      <div className="border-b-2 pl-2 ">
        <p className="text-sm text-slate-600 mb-4">아이디</p>
        <input type="text" placeholder="이메일을 입력해 주세요" />
      </div>

      <div className="border-b-2 pl-2 my-10 ">
        <p className="text-sm text-slate-600 mb-4">비밀번호</p>
        <input type="password" placeholder="6자 - 20자의 비밀번호" />
      </div>
      <div className="">
        <button type="submit" className="font-semibold rounded-lg bg-slate-200 w-full h-12">
          로그인
        </button>
        <Link href="/register">
          <button className="font-semibold rounded-lg bg-stone-100 w-full h-12 mt-2">
            회원가입
          </button>
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
