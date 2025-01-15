
import { LoginForm } from "@/app/(auth)/login/login-form";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1 className="text-2xl text-center font-semibold tracking-tight m-5">Hello, please login</h1>
      <div className="flex justify-center ">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
