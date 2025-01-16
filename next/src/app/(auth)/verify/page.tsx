import { InputOTPForm } from "@/app/(auth)/verify/verify-form";
import React from "react";

const Verify = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 rounded-lg shadow-md">
      <h1 className="text-2xl text-center font-semibold tracking-tight m-5">Verify</h1>
      <div className="">
        <InputOTPForm />
      </div>
    </div>
  );
};

export default Verify;
