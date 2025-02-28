import CustomerSatisfaction from "./dasboard/CustomerSatisfaction";
import SalesMapping from "./dasboard/SalesMapping";
import TargetVsReality from "./dasboard/TargetVsReality";
import TodaySales from "./dasboard/TodaySales";
import TopProduct from "./dasboard/TopProduct";
import TotalRevenue from "./dasboard/TotalRevenue";
import VisitorInsight from "./dasboard/VisitorInsight";
import VolumeVsService from "./dasboard/VolumeVsService";

export default function Dashboard() {
  return (
    <div className="h-full w-full bg-gray-50 p-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
        <div className="col-span-1 rounded-xl bg-white p-5 shadow lg:col-span-7">
          <TodaySales />
        </div>
        <div className="col-span-1 rounded-xl bg-white p-5 shadow lg:col-span-5">
          <VisitorInsight />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-11">
        <div className="col-span-1 rounded-xl bg-white p-5 shadow lg:col-span-5">
          <TotalRevenue />
        </div>
        <div className="col-span-1 rounded-xl bg-white p-5 shadow lg:col-span-3">
          <CustomerSatisfaction />
        </div>
        <div className="col-span-1 rounded-xl bg-white p-5 shadow lg:col-span-3">
          <TargetVsReality />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-11">
        <div className="col-span-1 rounded-xl bg-white p-5 shadow lg:col-span-5">
          <TopProduct />
        </div>
        <div className="col-span-1 rounded-xl bg-white p-5 shadow lg:col-span-3">
          <SalesMapping />
        </div>
        <div className="col-span-1 rounded-xl bg-white p-5 shadow lg:col-span-3">
          <VolumeVsService />
        </div>
      </div>
    </div>
  );
}
