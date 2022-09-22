import Link from "next/link";
import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import AuthService from "../../services/auth.service";
import { AiFillCaretRight } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";

const vegetypes = [
  {
    id: 1,
    title: "비건",
    value: "비건",
    file: "vegan.png",
  },
  {
    id: 2,
    title: "락토",
    value: "락토",
    file: "lacto.png",
  },
  {
    id: 3,
    title: "오보",
    value: "오보",
    file: "ovo.png",
  },
  {
    id: 4,
    title: "락토오보",
    value: "락토오보",
    file: "lactoovo.png",
  },
  {
    id: 5,
    title: "페스코",
    value: "페스코",
    file: "pesco.png",
  },
  {
    id: 6,
    title: "지향없음",
    value: "지향없음",
    file: "none.png"
  }
];

function RegisterForm(props) {
  const router = useRouter();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [name, onChangeName] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [vegetarianType, setVegetarianType] = useState("");

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

  const checkbox = (checkThis) => {
    const checkbox = document.getElementsByName("vegetarianType");
    for (const i = 0; i < checkbox.length; i++) {
      if (checkbox[i] !== checkThis) {
        checkbox[i].checked = false;
      }
      setVegetarianType(checkThis.value);
    }
  };

  return (
    <form onSubmit={handleRegister} className="text-gray-3">
      <div className="border-b-2 border-green pl-2 ">
        <div className="text-sm text-slate-600 mb-4">이메일</div>
        <input
          className="outline-none bg-gray-4 py-2"
          type="text"
          value={email}
          onChange={onChangeEmail}
          placeholder="아이디로 사용할 이메일"
          required
        />
      </div>
      <div className="border-b-2 border-green pl-2 my-10 ">
        <div className="text-sm text-slate-600 mb-4">이름</div>
        <input
          className="outline-none bg-gray-4 py-2"
          type="text"
          value={name}
          onChange={onChangeName}
          placeholder="2자 이상의 이름"
          required
        />
      </div>
      <div className="border-b-2 border-green pl-2 my-10 ">
        <div className="text-sm text-slate-600 mb-4">닉네임</div>
        <input
          className="outline-none bg-gray-4 py-2"
          type="text"
          value={nickname}
          onChange={onChangeNickname}
          placeholder="2자 이상의 닉네임"
          required
        />
      </div>
      <div className="border-b-2 border-green pl-2 my-10 ">
        <div className="text-sm text-slate-600 mb-4">비밀번호</div>
        <input
          className="outline-none bg-gray-4 py-2"
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="6자 - 20자의 비밀번호"
          required
        />
      </div>

      <div className="pl-2 my-10 ">
        <div className="flex justify-between">
          <div className="text-sm text-slate-600 mb-4">지향하는 채식 타입 선택</div>
          <Link href="/information/vegetarian ">
            <div className="text-xs cursor-pointer flex">
              채식 타입 안내
              <AiFillCaretRight />
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-6">
        {vegetypes.map((item) => (
              <label key={item.id}>
              <input
                type="checkbox"
                className="hidden peer"
                name="vegetarianType"
                value={item.value}
                onChange={(e) => checkbox(e.target)}
              />
              
              <div className="mr-2 rounded-full bg-gray-2 text-center w-16 h-16 pt-2 hover:bg-bg  peer-checked:bg-green peer-checked:text-white ">
              <Image src={`/images/${item.file}`} width={25} height={25} alt="채식사진" />
              <p className="text-xs text-gray-700  text-center">{item.title}</p>
              </div>
            
            </label>
        ))}
        </div>
      </div>
      <div className="mb-32">
        <button
          type="submit"
          className="font-semibold rounded-lg bg-bg w-full h-12 mt-2"
        >
          회원가입
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
