import { NavLink } from "react-router-dom";
import {
  HiOutlineViewGrid,
  HiOutlineClipboardList,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlinePlus,
  HiX,
} from "react-icons/hi";
import { MdCheckCircle } from "react-icons/md";

const navItems = [
  { to: "/dashboard", label: "Overview", icon: HiOutlineViewGrid, end: true },
  { to: "/dashboard/todos", label: "All todos", icon: HiOutlineClipboardList },
  { to: "/dashboard/today", label: "Today", icon: HiOutlineCalendar },
  { to: "/dashboard/upcoming", label: "Upcoming", icon: HiOutlineClock },
  { to: "/dashboard/completed", label: "Completed", icon: MdCheckCircle },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-slate-950 border-r border-slate-800 flex flex-col
        transform transition-transform duration-200 ease-out
        md:static md:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Brand */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-slate-800 shrink-0">
          <span className="text-lg font-semibold text-slate-100">
            mr<span className="text-emerald-400">todo</span>
          </span>
          <button
            onClick={onClose}
            className="md:hidden text-slate-500 hover:text-slate-300"
            aria-label="Close menu"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>

        {/* New task */}
        <div className="px-4 pt-4">
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-emerald-400 transition-colors">
            <HiOutlinePlus className="w-4 h-4" />
            New task
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 pt-6 space-y-1 overflow-y-auto">
          <p className="px-2 pb-2 text-xs font-medium text-slate-600">Menu</p>
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                }`
              }
            >
              <Icon className="w-4.5 h-4.5 shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-800 p-3">
          <NavLink
            to="/dashboard/settings"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
              }`
            }
          >
            <HiOutlineCog className="w-4.5 h-4.5 shrink-0" />
            Settings
          </NavLink>

          <button className="w-full flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-400 hover:bg-slate-900 hover:text-slate-200 transition-colors">
            <HiOutlineLogout className="w-4.5 h-4.5 shrink-0" />
            Log out
          </button>

          <div className="flex items-center gap-3 pt-3 mt-2 border-t border-slate-800">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium text-slate-300 shrink-0">
              AI
            </div>
            <div className="min-w-0">
              <p className="text-sm text-slate-200 truncate">Aisosa Igbinosa</p>
              <p className="text-xs text-slate-500 truncate">
                aisosa@mrtodo.com
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
