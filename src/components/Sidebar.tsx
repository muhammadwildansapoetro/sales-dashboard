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

export default function Sidebar() {
  return (
    <div className="h-screen w-56 bg-white p-5">
      <div className="mt-5 flex items-center justify-start gap-3">
        <div className="rounded-md bg-indigo-500 px-4 py-2 text-xl font-medium text-white">
          S
        </div>
        <h2 className="text-2xl font-semibold text-gray-700">Dabang</h2>
      </div>
      <ul className="mt-8 space-y-4">
        <li className="flex items-center space-x-2 rounded-lg bg-indigo-500 p-3 text-white hover:scale-105 hover:cursor-pointer">
          <ChartPie size={20} />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center space-x-2 rounded-lg p-3 text-gray-600 hover:scale-105 hover:cursor-pointer hover:bg-gray-100">
          <ChartNoAxesColumn size={20} />
          <span>Leaderboard</span>
        </li>
        <li className="flex items-center space-x-2 rounded-lg p-3 text-gray-600 hover:scale-105 hover:cursor-pointer hover:bg-gray-100">
          <ShoppingCart size={20} />
          <span>Order</span>
        </li>
        <li className="flex items-center space-x-2 rounded-lg p-3 text-gray-600 hover:scale-105 hover:cursor-pointer hover:bg-gray-100">
          <ShoppingBag size={20} />
          <span>Products</span>
        </li>
        <li className="flex items-center space-x-2 rounded-lg p-3 text-gray-600 hover:scale-105 hover:cursor-pointer hover:bg-gray-100">
          <ChartSpline size={20} />
          <span>Sales Report</span>
        </li>
        <li className="flex items-center space-x-2 rounded-lg p-3 text-gray-600 hover:scale-105 hover:cursor-pointer hover:bg-gray-100">
          <MessageSquare size={20} />
          <span>Messages</span>
        </li>
        <li className="flex items-center space-x-2 rounded-lg p-3 text-gray-600 hover:scale-105 hover:cursor-pointer hover:bg-gray-100">
          <Settings size={20} />
          <span>Settings</span>
        </li>
        <li className="mt-auto flex items-center space-x-2 rounded-lg p-3 text-gray-600 hover:scale-105 hover:cursor-pointer hover:bg-gray-100">
          <LogOut size={20} />
          <span>Sign Out</span>
        </li>
      </ul>
    </div>
  );
}
