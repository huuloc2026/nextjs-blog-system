"use client";
import { useAppContext } from "@/app/AppProvider";
import envConfig from "@/app/config/config";
import Header from "@/components/ui/header";
import HeaderSession from "@/components/ui/header-session";

import React, { useEffect } from "react";

const HeaderLayout = () => {
  const { sessionToken } = useAppContext();
  console.log(sessionToken);
// return <> <Header/> </>
 return <>{sessionToken ? <HeaderSession /> : <Header />}</>;
};

export default HeaderLayout;
