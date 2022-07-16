import React from "react";
import DashboardPage from "./DashboardPage";
import { LoginProvider } from "../loginContext";

const DashboardScreen = () => {
  return (
    <>
      <LoginProvider>
        <DashboardPage />
      </LoginProvider>
    </>
  );
};

export default DashboardScreen;
