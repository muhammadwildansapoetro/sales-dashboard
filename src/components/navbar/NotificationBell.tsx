import { Bell } from "lucide-react";

export default function NotificationBell({
  hasNotification,
}: {
  hasNotification: boolean;
}) {
  return (
    <div className="relative flex items-center justify-center rounded-xl bg-orange-50 p-3 hover:scale-105 hover:cursor-pointer">
      <Bell className="h-6 w-6 text-orange-500" />
      {hasNotification && (
        <span className="absolute top-2 right-2 -mt-1 -mr-1 h-2 w-2 rounded-full bg-red-500"></span>
      )}
    </div>
  );
}
