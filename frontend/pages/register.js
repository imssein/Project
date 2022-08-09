import React from "react";
import RegisterForm from "../components/user/RegisterForm";
import Head from "next/head";

function register(props) {
  return (
    <div className="py-6 px-6">
      <Head>
        <title>VeganPleasure | 회원가입</title>
      </Head>
      <RegisterForm />
    </div>
  );
}

export default register;
