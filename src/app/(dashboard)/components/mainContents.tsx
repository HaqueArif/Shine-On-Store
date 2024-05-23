// src/app/(dashboard)/components/MainContent.tsx
import React from "react";

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 p-6 bg-gray-100 w-full overflow-x-auto">
      {children}
    </div>
  );
};

export default MainContent;
