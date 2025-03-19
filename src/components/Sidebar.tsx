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
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuList = [
    { name: "Dashboard", icon: <ChartPie size={20} />, href: "/" },
    {
      name: "Leaderboard",
      icon: <ChartNoAxesColumn size={20} />,
      href: "/leaderboard",
    },
    { name: "Order", icon: <ShoppingCart size={20} />, href: "/order" },
    { name: "Products", icon: <ShoppingBag size={20} />, href: "/products" },
    {
      name: "Sales Report",
      icon: <ChartSpline size={20} />,
      href: "/sales-report",
    },
    {
      name: "Messages",
      icon: <MessageSquare size={20} />,
      href: "/messages",
    },
    { name: "Settings", icon: <Settings size={20} />, href: "/settings" },
  ];

  return (
    <div className="h-screen w-56 bg-white p-5">
      <div className="mt-5 flex items-center justify-start gap-3">
        <div className="rounded-md bg-indigo-500 px-4 py-2 text-xl font-medium text-white">
          S
        </div>
        <h2 className="text-2xl font-semibold text-gray-700">Dabang</h2>
      </div>
      <div className="mt-8 space-y-4">
        {menuList.map((menu) => (
          <Link
            href={menu.href}
            key={menu.name}
            className={`flex items-center space-x-2 rounded-lg p-3 transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer ${
              pathname === menu.href
                ? "bg-indigo-500 text-white"
                : "text-gray-600 hover:bg-indigo-100"
            }`}
          >
            {menu.icon}
            <span>{menu.name}</span>
          </Link>
        ))}
        <Link
          href={"/"}
          className="mt-auto flex items-center space-x-2 rounded-lg p-3 text-red-600 hover:scale-105 hover:cursor-pointer hover:bg-red-50"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </Link>
      </div>
    </div>
  );
}
