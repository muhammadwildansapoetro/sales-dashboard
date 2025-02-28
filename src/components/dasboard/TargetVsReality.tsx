"use client";

import { targetVsRealityData } from "@/data/targetVsReality";
import { ShoppingBag, Target } from "lucide-react";
import { XAxis, Tooltip, BarChart, Bar, ResponsiveContainer } from "recharts";

export default function TargetVsReality() {
  const totals = targetVsRealityData.reduce(
    (accumulator, current) => {
      accumulator.realitySales += current.realitySales;
      accumulator.targetSales += current.targetSales;
      return accumulator;
    },
    { realitySales: 0, targetSales: 0 },
  );
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold text-gray-700">Target vs Reality</h1>
      </div>

      <div className="mt-5 h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={targetVsRealityData}>
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#6B7280" }} />
            <Tooltip />
            <Bar
              dataKey="realitySales"
              fill="#4ab58e"
              name="Reality Sales"
              barSize={15}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="targetSales"
              fill="#fbcf00"
              name="Target Sales"
              barSize={15}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-green-100 p-2">
            <ShoppingBag className="text-[#27ad60]" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-900">Reality Sales</p>
            <p className="text-xs text-gray-500">Global</p>
          </div>
          <p className="ml-10 text-sm text-[#27ad60]">
            {totals.realitySales.toLocaleString("de-De")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-yellow-100 p-2">
            <Target className="text-[#fba412]" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-900">Target Sales</p>
            <p className="text-xs text-gray-500">Commercial</p>
          </div>
          <p className="ml-10 text-sm text-[#fba412]">
            {totals.targetSales.toLocaleString("de-De")}
          </p>
        </div>
      </div>
    </div>
  );
}
