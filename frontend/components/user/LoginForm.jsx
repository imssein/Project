import axios from "axios";
import Link from "next/link";
import React, { useCallback } from "react";
import useInput from "../../hooks/useInput";
import AuthService from "../../services/auth.service";
const API_URL = "http://localhost:9090/v1/api/members/";
import { useDispatch } from "react-redux";
import { loginAction } from "../../reducers/user";
import Router from "next/router";

function LoginForm(props) { 
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const handleLogin = useCallback((e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(loginAction({email, password}));
    Router.push('/mypage')
  }, [email,password]);

    // try { 
    //   const response = await axios.post(API_URL + "login" , {
    //     email, 
    //     password,
    //   });
    //   if(response.data.accessToken) {
    //     localStorage.setItem("user", JSON.stringify(response.data))
    //   }
    //   window.location.replace('/mypage'); 
    //   dispatch(loginAction(response.data.user))
    //   return response.data; 
    // } catch (err){
    //   console.log(err);
    // }
  
  return (
    <form onSubmit={handleLogin}>
      <div className="border-b-2 pl-2 ">
        <p className="text-sm text-slate-600 mb-4">아이디</p>
        <input type="text" value={email} onChange={onChangeEmail} placeholder="이메일을 입력해 주세요" required/>
      </div>

      <div className="border-b-2 pl-2 my-10 ">
        <p className="text-sm text-slate-600 mb-4">비밀번호</p>
        <input type="password" value={password} onChange={onChangePassword} placeholder="6자 - 20자의 비밀번호" required/>
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
