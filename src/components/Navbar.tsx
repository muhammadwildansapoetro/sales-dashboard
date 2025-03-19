"use client";

import { FaSearch } from "react-icons/fa";
import LanguageSelector from "./navbar/LanguageSelector";
import NotificationBell from "./navbar/NotificationBell";
import ProfileMenu from "./navbar/ProfileMenu";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const titles: { [key: string]: string } = {
    "/": "Dashoard",
    "/leaderboard": "Leaderboard",
    "/messages": "Messages",
    "/order": "Order",
    "/products": "Products",
    "/sales-report": "Sales Report",
    "/settings": "Settings",
  };

  const title = titles[pathname];

  return (
    <div className="flex w-full items-center justify-between p-5">
      <h1 className="text-3xl font-semibold text-gray-700">{title}</h1>

      <div className="flex items-center gap-10">
        <div className="flex w-96 items-center rounded-lg bg-gray-50 px-4 py-2">
          <button className="hover:scale-105 hover:cursor-pointer">
            <FaSearch className="h-5 w-5 text-indigo-500" />
          </button>
          <input
            type="text"
            placeholder="Search here..."
            className="ml-3 w-full border-none p-2 focus:ring-0"
          />
        </div>

        <LanguageSelector />

        <NotificationBell />

        <ProfileMenu />
      </div>
    </div>
  );
}
