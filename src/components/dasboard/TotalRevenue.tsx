"use client";

import { totalRevenueData } from "@/data/totalRevenue";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function TotalRevenue() {
  return (
    <div className="flex h-full flex-col justify-between">
      <h1 className="text-xl font-bold text-gray-700">Total Revenue</h1>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={totalRevenueData}>
            <CartesianGrid stroke="#f0f1f3" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fontSize: 12 }}
              tickLine={false}
            />
            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 12 }} iconType="circle" />
            <Bar
              dataKey="onlineSales"
              fill="#0095ff"
              name="Online Sales"
              barSize={15}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="offlineSales"
              fill="#00e096"
              name="Offline Sales"
              barSize={15}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
