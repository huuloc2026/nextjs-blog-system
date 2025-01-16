"use client";

import { useAppContext } from "@/app/AppProvider";
import envConfig from "@/app/config/config";
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

    };
    fetchRequest();
  }, []);
  return <div> 
    {/* <div>
        {res.data.map((item: any) => {
          return (
            <ul className="justify-center flex p-6">
              <li key={item.id}>Hello {item.email}</li>
            </ul>
          );
        })}
      </div> */}
      <h1>Hello World</h1>
      </div>;
};

export default HelloProfile;
