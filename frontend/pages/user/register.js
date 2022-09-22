import React from "react";
import Head from "next/head";
import Nav from "../../components/common/Nav";
import MainMenu from "../../components/common/MainMenu";
import RegisterForm from "../../components/member/RegisterForm";

function register(props) {
  return (
    <div className="h-full">
      <Head>
        <title>VeganPleasure | 회원가입</title>
      </Head>
      <Nav />
      <div className="py-9 px-9 ">
        <RegisterForm />
      </div>
      <MainMenu />
    </div>
  );
}

export default register;
