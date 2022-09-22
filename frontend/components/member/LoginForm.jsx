import Link from "next/link";
import React from "react";
import useInput from "../../hooks/useInput";
import AuthService from "../../services/auth.service";

function LoginForm(props) {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          window.location.replace("/user/mypage");
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
    <form onSubmit={handleLogin} className="text-gray-3">
      <div className="border-b-2 border-green pl-2 ">
        <p className="text-sm mb-4">아이디</p>
        <input
          className="outline-none bg-gray-4 py-2"
          type="text"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일을 입력해 주세요"
          required
        />
      </div>

      <div className="border-b-2 border-green pl-2 my-10 ">
        <p className="text-sm mb-4">비밀번호</p>
        <input
          className="outline-none bg-gray-4 py-2"
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="6자 - 20자의 비밀번호"
          required
        />
      </div>
      <div className="">
        <button
          type="submit"
          className="font-semibold rounded-lg bg-bg w-full h-12 text-green"
        >
          로그인
        </button>

        <Link href="/user/register">
          <button className="font-semibold rounded-lg bg-gray-2 w-full h-12 mt-2">
            회원가입
          </button>
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
