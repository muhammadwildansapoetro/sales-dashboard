import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function LeaderboardPage() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Navbar />
        <div className="p-5">Sales Report Page</div>
      </div>
    </main>
  );
}
