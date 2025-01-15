"use client";
import { useAppContext } from "@/app/AppProvider";
import envConfig from "@/app/config/config";
import { cookies } from "next/headers";
import React, { useEffect } from "react";
const HelloProfile = () => {
  const apiUrl = envConfig?.NEXT_PUBLIC_API_ENDPOINT;
  const { sessionToken } = useAppContext();
  useEffect(() => {
    const fetchRequest = async () => {
      const result = await fetch(`${apiUrl}/user/getAllUsers`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
      });
      const res = await result.json();
      console.log(res);
    };
    fetchRequest();
  }, [sessionToken]);
  return <div>HelloProfile</div>;
};

export default HelloProfile;
