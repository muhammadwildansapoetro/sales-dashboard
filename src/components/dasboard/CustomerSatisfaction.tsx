"use client";

import { customerSatisfactionData } from "@/data/customerSatisfaction";
import {
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  YAxis,
  XAxis,
  AreaChart,
} from "recharts";

export default function CustomerSatisfaction() {
  const totals = customerSatisfactionData.reduce(
    (accumulator, current) => {
      accumulator.lastMonth += current.lastMonth;
      accumulator.thisMonth += current.thisMonth;
      return accumulator;
    },
    { lastMonth: 0, thisMonth: 0 },
  );

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  const CustomLegend = () => {
    return (
      <div className="border-t border-gray-200 pt-5 text-gray-700">
        <div className="flex justify-center gap-5">
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-2 text-base font-light text-gray-400">
              <span className="inline-block h-2 w-2 rounded-full bg-[#3495ff]" />
              Last Month
            </span>
          </div>
          <span className="border-r border-gray-300" />
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-2 text-base font-light text-gray-400">
              <span className="inline-block h-2 w-2 rounded-full bg-[#1be098]" />
              This Month
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-20">
          <span className="text-sm font-medium">
            {formatCurrency(totals.lastMonth)}
          </span>
          <span className="text-sm font-medium">
            {formatCurrency(totals.thisMonth)}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <h1 className="text-xl font-bold text-gray-700">Customer Satisfaction</h1>

      <div className="mt-5 h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={customerSatisfactionData}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3495ff" stopOpacity={0.3} />
                <stop offset="45%" stopColor="#3495ff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1be098" stopOpacity={0.3} />
                <stop offset="45%" stopColor="#1be098" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 12 }}
              content={<CustomLegend />}
            />
            <YAxis hide />
            <XAxis dataKey="name" hide />
            <Area
              type="monotone"
              dataKey="lastMonth"
              stroke="#4285F4"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorLastMonth)"
              name="Last Month"
              dot={{ r: 3, fill: "#3495ff" }}
            />
            <Area
              type="monotone"
              dataKey="thisMonth"
              stroke="#34A853"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorThisMonth)"
              name="This Month"
              dot={{ r: 3, fill: "#1be098" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
