import React from "react";
import MainLayout from "../components/common/MainLayout";
import LoginForm from "../components/user/LoginForm";
import Head from "next/head";

function login(props) {
  return (
    <div className="py-6 px-6">
      <Head>
        <title>VeganPleasure | 로그인</title>
      </Head>
      <div className="pt-4 md: max-w-2xl md:mx-auto">
        <MainLayout>
          <LoginForm />
        </MainLayout>
      </div>
    </div>
  );
}

export default login;
