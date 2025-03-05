import { FileChartColumnIncreasing, FileText, UserPlus } from "lucide-react";
import { CgExport } from "react-icons/cg";
import { IoIosPricetag } from "react-icons/io";

export default function TodaySales() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-700">Today's Sales</h1>
          <h2 className="mt-2 text-lg text-gray-400">Sales Summary</h2>
        </div>
        <button className="group flex items-baseline gap-2 rounded-xl border border-gray-400 p-2 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-indigo-500">
          <CgExport className="group-hover:text-white" />
          <p className="text-gray-900 group-hover:text-white">Export</p>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        <div className="flex aspect-square flex-col items-start justify-between rounded-2xl bg-red-100 p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-300">
            <FileChartColumnIncreasing className="text-white" />
          </div>
          <p className="text-2xl font-bold">$1k</p>
          <p className="text-gray-600">Total Sales</p>
          <p className="text-sm text-blue-500">+8% from yesterday</p>
        </div>
        <div className="flex aspect-square flex-col items-start justify-between rounded-2xl bg-orange-100 p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-300">
            <FileText className="text-white" />
          </div>
          <p className="text-2xl font-bold">300</p>
          <p className="text-gray-600">Total Order</p>
          <p className="text-sm text-blue-500">+5% from yesterday</p>
        </div>
        <div className="flex aspect-square flex-col items-start justify-between rounded-2xl bg-green-100 p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-400">
            <IoIosPricetag className="size-5 text-white" />
          </div>
          <p className="text-2xl font-bold">5</p>
          <p className="text-gray-600">Product Sold</p>
          <p className="text-sm text-blue-500">+1.2% from yesterday</p>
        </div>
        <div className="flex aspect-square flex-col items-start justify-between rounded-2xl bg-purple-100 p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-400">
            <UserPlus className="text-white" />
          </div>
          <p className="text-2xl font-bold">8</p>
          <p className="text-gray-600">New Customers</p>
          <p className="text-sm text-blue-500">+0.5% from yesterday</p>
        </div>
      </div>
    </div>
  );
}
