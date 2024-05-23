// src/app/(dashboard)/components/Header.tsx
import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-semibold">My Dashboard</div>
      <div>
        <button className="bg-blue-500 p-2 rounded">Log Out</button>
      </div>
    </div>
  );
};

export default Header;
