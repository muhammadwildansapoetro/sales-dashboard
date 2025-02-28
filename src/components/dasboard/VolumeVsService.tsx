"use client";

import { volumeVsService } from "@/data/volumeVsService";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function VolumeVsService() {
  const totals = volumeVsService.reduce(
    (accumulator, current) => {
      accumulator.services += current.services;
      accumulator.volume += current.volume;
      return accumulator;
    },
    { services: 0, volume: 0 },
  );

  const CustomLegend = () => {
    return (
      <div className="mt-5 border-t border-gray-200 pt-5 text-gray-700">
        <div className="flex justify-center gap-5">
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-2 text-base font-light text-gray-400">
              <span className="inline-block h-2 w-2 rounded-full bg-[#4285F4]" />
              Volume
            </span>
          </div>
          <span className="border-r border-gray-300" />
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-2 text-base font-light text-gray-400">
              <span className="inline-block h-2 w-2 rounded-full bg-[#34A853]" />
              Services
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-20">
          <span className="text-sm font-medium">
            {totals.volume.toLocaleString("de-De")}
          </span>
          <span className="text-sm font-medium">
            {totals.services.toLocaleString("de-DE")}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <h1 className="text-xl font-bold text-gray-700">
        Volume vs Service Level
      </h1>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={volumeVsService}>
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 12 }} content={CustomLegend} />
            <YAxis hide />
            <XAxis dataKey="name" hide />
            <Bar
              dataKey="services"
              stackId="a"
              fill="#00e096"
              name="Services"
              barSize={15}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="volume"
              stackId="a"
              fill="#0095ff"
              name="Volume"
              barSize={15}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
