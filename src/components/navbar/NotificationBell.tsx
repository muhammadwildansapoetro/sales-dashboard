"use client";

import { Bell, X } from "lucide-react";
import { useState } from "react";

export default function NotificationBell() {
  const [hasNotification, setHasNotification] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNotification = () => {
    setHasNotification((prev) => !prev);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleNotification}
        className="relative flex items-center justify-center rounded-xl bg-orange-50 p-3 transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
      >
        <Bell className="h-6 w-6 text-orange-500" />
        {hasNotification && (
          <span className="absolute top-2 right-2 -mt-1 -mr-1 h-2 w-2 rounded-full bg-red-500"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-10 right-0 z-50 w-72 rounded-lg bg-white p-5 shadow-lg">
          <div className="flex items-center justify-between border-b pb-2">
            <h1 className="text-lg font-semibold">Notifications</h1>
            <button onClick={toggleNotification}>
              <X className="h-5 w-5 text-gray-600 hover:cursor-pointer hover:text-gray-800" />
            </button>
          </div>

          <div className="mt-3">
            <p className="rounded-lg bg-gray-100 p-2 text-sm text-gray-700">
              You have a new message!
            </p>
            <p className="mt-2 rounded-lg bg-gray-100 p-2 text-sm text-gray-700">
              Your report has been approved.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
