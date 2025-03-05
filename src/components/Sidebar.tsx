"use client";

import {
  ShoppingCart,
  MessageSquare,
  Settings,
  LogOut,
  ChartPie,
  ShoppingBag,
  ChartSpline,
  ChartNoAxesColumn,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  const menuList = [
    { name: "Dashboard", icon: <ChartPie size={20} /> },
    { name: "Leaderboard", icon: <ChartNoAxesColumn size={20} /> },
    { name: "Order", icon: <ShoppingCart size={20} /> },
    { name: "Products", icon: <ShoppingBag size={20} /> },
    { name: "Sales Report", icon: <ChartSpline size={20} /> },
    { name: "Messages", icon: <MessageSquare size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="h-screen w-56 bg-white p-5">
      <div className="mt-5 flex items-center justify-start gap-3">
        <div className="rounded-md bg-indigo-500 px-4 py-2 text-xl font-medium text-white">
          S
        </div>
        <h2 className="text-2xl font-semibold text-gray-700">Dabang</h2>
      </div>
      <ul className="mt-8 space-y-4">
        {menuList.map((menu) => (
          <li
            key={menu.name}
            className={`flex items-center space-x-2 rounded-lg p-3 transition hover:scale-105 hover:cursor-pointer ${
              selectedMenu === menu.name
                ? "bg-indigo-500 text-white"
                : "text-gray-600 hover:bg-indigo-100"
            }`}
            onClick={() => setSelectedMenu(menu.name)}
          >
            {menu.icon}
            <span>{menu.name}</span>
          </li>
        ))}
        <li className="mt-auto flex items-center space-x-2 rounded-lg p-3 text-red-600 hover:scale-105 hover:cursor-pointer hover:bg-red-50">
          <LogOut size={20} />
          <span>Sign Out</span>
        </li>
      </ul>
    </div>
  );
}
