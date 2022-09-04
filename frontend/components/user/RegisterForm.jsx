import Link from "next/link";
import React from "react";
import useInput from "../../hooks/useInput";
import AuthService from "../../services/auth.service";
import { AiFillCaretRight } from "react-icons/ai";
import { useRouter } from "next/router";

function RegisterForm(props) {
  const router = useRouter();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [name, onChangeName] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [vegetarianType, onChangeVegetarianType] = useInput("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(
        email,
        name,
        nickname,
        password,
        vegetarianType
      ).then(
        () => {
          alert("회원가입 완료");
          router.replace("/");
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="border-b-2 pl-2 ">
        <p className="text-sm text-slate-600 mb-4">이메일</p>
        <input
          type="text"
          value={email}
          onChange={onChangeEmail}
          placeholder="아이디로 사용할 이메일"
          required
        />
      </div>
      <div className="border-b-2 pl-2 my-10 ">
        <p className="text-sm text-slate-600 mb-4">이름</p>
        <input
          type="text"
          value={name}
          onChange={onChangeName}
          placeholder="2자 이상의 이름"
          required
        />
      </div>
      <div className="border-b-2 pl-2 my-10 ">
        <p className="text-sm text-slate-600 mb-4">닉네임</p>
        <input
          type="text"
          value={nickname}
          onChange={onChangeNickname}
          placeholder="2자 이상의 닉네임"
          required
        />
      </div>
      <div className="border-b-2 pl-2 my-10 ">
        <p className="text-sm text-slate-600 mb-4">비밀번호</p>
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="6자 - 20자의 비밀번호"
          required
        />
      </div>

      <div className="border-b-2 pl-2 my-10 ">
        <div className="flex justify-between">
          <p className="text-sm text-slate-600 mb-4">지향하는 채식 타입 선택</p>
          <Link href="/information ">
            <p className="text-xs cursor-pointer flex">
              채식 타입 안내
              <AiFillCaretRight />
            </p>
          </Link>
        </div>
        <div>
          <input
            type="text"
            value={vegetarianType}
            onChange={onChangeVegetarianType}
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="">
        <button
          type="submit"
          className="font-semibold rounded-lg bg-slate-200 w-full h-12"
        >
          회원가입
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
