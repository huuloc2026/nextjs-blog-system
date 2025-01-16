import { RegisterForm } from "@/app/(auth)/register/register-form";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <h1 className="text-2xl text-center font-semibold tracking-tight m-5">Create an account</h1>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
