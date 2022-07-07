import Link from 'next/link';
import React from 'react';
import { AiFillCaretRight } from "react-icons/ai";

function RegisterForm(props) {
    return (
        <form>
          <div className="border-b-2 pl-2 ">
            <p className="text-sm text-slate-600 mb-4">이메일</p>
            <input type="text" placeholder="아이디로 사용할 이메일" />
          </div>
    
          <div className="border-b-2 pl-2 my-10 ">
            <p className="text-sm text-slate-600 mb-4">비밀번호</p>
            <input type="password" placeholder="6자 - 20자의 비밀번호" />
          </div>
          <div className="border-b-2 pl-2 my-10 ">
            <p className="text-sm text-slate-600 mb-4">닉네임</p>
            <input type="password" placeholder="2자 이상의 닉네임" />
          </div>
          <div className="pl-2 my-10 ">
            <div className='flex justify-between'>
                <p className="text-sm text-slate-600 mb-4">지향하는 채식 타입 선택</p>
                <Link href="/information ">
                <p className='text-xs cursor-pointer flex'>채식 타입 안내<AiFillCaretRight /></p>
                </Link>
            </div>
            <div>
                비건 락토 오보 락토오보 페스코 지향없음
            </div>
          </div>
          <div className="">
            <button type="submit" className="font-semibold rounded-lg bg-slate-200 w-full h-12">
              회원가입
            </button> 
           
          </div>
        </form>
      );
}

export default RegisterForm;