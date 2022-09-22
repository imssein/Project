import React from "react";
import MainLayout from "../../components/common/MainLayout";
import LoginForm from "../../components/member/LoginForm";
import Head from "next/head";
import Nav from "../../components/common/Nav";
import MainMenu from "../../components/common/MainMenu";

function login(props) {
  return (
    <div className="h-screen">
      <Nav />
      <Head>
        <title>VeganPleasure | 로그인</title>
      </Head>
      <div className="py-9 px-9">
      <LoginForm />
      </div>
      <MainMenu />
    </div>
  );
}

export default login;
