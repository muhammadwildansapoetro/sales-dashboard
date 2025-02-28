"use client";

import { salesMappingData } from "@/data/salesMapping";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const getPercentage = (value: number, total: number) => {
  if (!total || total === 0) return "0%";
  return ((value / total) * 100).toFixed(0) + "%";
};

const CustomLegend = ({ payload }: any) => {
  if (!salesMappingData || salesMappingData.length === 0) return null;

  const total = salesMappingData.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="ml-2 flex flex-col gap-2">
      {payload.map((entry: any, index: number) => {
        const matchingData = salesMappingData.find(
          (d) => d.name === entry.value,
        );
        const percentage = matchingData
          ? getPercentage(matchingData.value, total)
          : "0%";

        return (
          <div key={`item-${index}`} className="flex items-center space-x-2">
            <div
              className="h-4 w-4 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-[10px] text-gray-700">
              {entry.value} - {percentage}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default function SalesMapping() {
  return (
    <div className="flex h-full flex-col justify-between">
      <h1 className="text-xl font-bold text-gray-700">
        Sales Mapping by Sector
      </h1>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={salesMappingData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              paddingAngle={1}
              dataKey="value"
            >
              {salesMappingData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              wrapperStyle={{ fontSize: 12 }}
              content={<CustomLegend />}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
