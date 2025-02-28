"use client";

import { visitorInsightData } from "@/data/visitorInsight";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function VisitorInsight() {
  return (
    <div className="flex flex-col justify-between">
      <h1 className="text-xl font-bold text-gray-700">Visitor Insight</h1>

      <div className="mt-5 h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={visitorInsightData}>
            <CartesianGrid vertical={false} stroke="#f8f8f9" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="loyal"
              stroke="#a700ff"
              strokeWidth={3}
              name="Loyal Customer"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="new"
              stroke="#EF4444"
              strokeWidth={3}
              name="New Customer"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="unique"
              stroke="#3cd856"
              strokeWidth={3}
              name="Unique Customer"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-[#8B5CF6]" />
          <p className="text-sm text-gray-700">Loyal Customer</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-[#EF4444]" />
          <p className="text-sm text-gray-700">New Customer</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-[#22C55E]" />
          <p className="text-sm text-gray-700">Unique Customer</p>
        </div>
      </div>
    </div>
  );
}
