import envConfig from "@/app/config/config";
import HelloProfile from "@/app/me/profile";
import { cookies } from "next/headers";
import React from "react";


const pageMe = async () => {
  const apiUrl = envConfig?.NEXT_PUBLIC_API_ENDPOINT;
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("sessionToken");

  // const result = await fetch(`${apiUrl}/me`)
  const result = await fetch(`${apiUrl}/user/getAllUsers`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionToken?.value}`,
    },
  });
  const res = await result.json();
  return (
    <div>
      {res.data.map((item: any) => {
        return (
          <ul className="justify-center flex p-6">
            <li>Hello {item.email}</li>
    
          </ul>
        );
      })}
    </div>
  );
};

export default pageMe;
