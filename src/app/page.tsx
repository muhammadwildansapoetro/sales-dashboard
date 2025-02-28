import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Navbar />
        <Dashboard />
      </div>
    </main>
  );
}
