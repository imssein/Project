import React, { useState, useEffect } from "react";
import Head from "next/head";
import MainLayout from "../../components/common/MainLayout";
import LoginForm from "../../components/member/LoginForm";
import AuthService from "../../services/auth.service";
import { DietsProvider } from "../../contexts/Diets";
import DietsAll from "../../components/diets/containers/DietsAll";

function All(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setIsLoggedIn(user);
    }
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>VeganPleasure | 식단기록</title>
      </Head>
      <div className="">
      {isLoggedIn ? (
        <div className="pt-3">
          <DietsProvider>
            <DietsAll />
          </DietsProvider>
         
        </div>
      ) : (
        <div>
          <p className="mb-11 text-red font-semibold">
            로그인 후 이용해주세요.
          </p>
          <LoginForm />
        </div>
      )}
      </div>
   
    </MainLayout>
  );
}

export default All;
