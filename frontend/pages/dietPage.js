import React, { useState, useEffect } from "react";
import Diet from "../components/diet/Diet";
import Head from "next/head";
import LoginForm from "../components/user/LoginForm";
import AuthService from "../services/auth.service";
import MainLayout from "../components/common/MainLayout";
function DietPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setIsLoggedIn(user);
    }
  }, []);
  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <MainLayout>
        <div className="py-6 px-6">
          <Head>
            <title>VeganPleasure | 식단기록</title>
          </Head>
          {isLoggedIn ? (
            <Diet />
          ) : (
            <div>
              <p className="py-8 px-8 text-red-500 font-semibold">
                로그인 후 이용해주세요.
              </p>
              <LoginForm />
            </div>
          )}
        </div>
      </MainLayout>
    </div>
  );
}

export default DietPage;
