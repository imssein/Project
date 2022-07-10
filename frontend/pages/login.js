import React from "react";
import MainLayout from "../components/common/MainLayout";
import LoginForm from "../components/user/LoginForm";

function login(props) {
  return (
    <div className="py-6 px-6">
      <LoginForm />
    </div>
  );
}

export default login;
