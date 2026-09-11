import { useState } from "react";
import { Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Sidebar from "../component/Sidebar";

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-slate-900 md:flex">
      <Sidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="flex-1 min-w-0 h-screen flex flex-col">
        <header className="md:hidden flex items-center justify-between h-16 px-4 border-b border-slate-800 bg-slate-900 sticky top-0 z-20 shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            className="text-slate-400 hover:text-slate-200"
            aria-label="Open menu"
          >
            <HiMenu className="w-6 h-6" />
          </button>
          <span className="text-base font-semibold text-slate-100">
            mr<span className="text-emerald-400">todo</span>
          </span>
          <div className="w-6" aria-hidden="true" />
        </header>

        <main className="flex-1 min-h-0 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-6xl w-full mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
