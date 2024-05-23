// src/app/(dashboard)/layout.tsx
import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import MainContent from "./components/mainContents";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-x-auto">
      <div className="w-[250px]">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 w-full min-w-[1250px] min-h-full overflow-x-auto">
        <Header />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
};

export default DashboardLayout;
