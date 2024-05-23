// src/app/(dashboard)/components/Sidebar.tsx
import React from "react";
import Link from "next/link";
import { Home, Settings, User } from "lucide-react"; // Example icons

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <div className="text-2xl font-semibold mb-6">Dashboard</div>
      <nav className="h-full flex flex-col justify-between pb-20">
        <ul>
          <li className="mb-4">
            <Link
              className="bg-slate-700 block py-2 rounded hover:bg-slate-600 transition-all"
              href="/dashboard/all-products"
            >
              <span className="block text-center">All Products</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="mb-4">
            <Link href="/">
              <span className="flex items-center">
                <Home className="mr-2" /> Home
              </span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard">
              <span className="flex items-center">
                <Settings className="mr-2" /> Settings
              </span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <span className="flex items-center">
                <User className="mr-2" /> Profile
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
