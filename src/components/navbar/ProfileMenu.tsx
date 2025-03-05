"use client";

import { ChevronDown, LogOut, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-48">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 transition-all duration-300 ease-in-out hover:cursor-pointer hover:rounded-xl hover:bg-indigo-50"
      >
        <div className="h-12 w-12 overflow-hidden rounded-xl">
          <Image
            src={
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg"
            }
            alt="profile picture"
            width={50}
            height={50}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-start gap-16">
          <div className="flex flex-col items-start">
            <p className="font-semibold text-gray-700">Name</p>
            <p className="text-gray-400">Role</p>
          </div>
          <ChevronDown />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-5 mt-2 w-48 rounded-lg bg-white shadow-lg">
          <ul className="py-2 text-gray-700">
            <li className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100">
              <User className="h-4 w-4" />
              Profile
            </li>
            <li className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100">
              <LogOut className="h-4 w-4" />
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
