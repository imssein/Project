import React from "react";
import RegisterForm from "../components/user/RegisterForm";
import Head from "next/head";
import MainLayout from "../components/common/MainLayout";

function register(props) {
  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <MainLayout>
        <div className="py-6 px-6">
          <Head>
            <title>VeganPleasure | 회원가입</title>
          </Head>
          <RegisterForm />
        </div>
      </MainLayout>
    </div>
  );
}

export default register;
