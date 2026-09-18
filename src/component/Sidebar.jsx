import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  HiOutlineViewGrid,
  HiOutlineClipboardList,
  HiOutlineLogout,
  HiX,
} from "react-icons/hi";
import { MdCheckCircle } from "react-icons/md";

const navItems = [
  { to: "/dashboard", label: "Overview", icon: HiOutlineViewGrid, end: true },
  { to: "/dashboard/todos", label: "All todos", icon: HiOutlineClipboardList },
  { to: "/dashboard/completed", label: "Completed", icon: MdCheckCircle },
];

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const { fullName, email } = user;

  const shortenName = () => {
    let short;
    const names = fullName.split(" ");
    if (names.length === 1) {
      short = names[0].slice(0, 2);
      return short.toUpperCase();
    } else {
      short = `${names[0].slice(0, 1)}${names[1].slice(0, 1)}`;
      return short.toUpperCase();
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

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
            Mr<span className="text-emerald-400">todo</span>
          </span>
          <button
            onClick={onClose}
            className="md:hidden text-slate-500 hover:text-slate-300"
            aria-label="Close menu"
          >
            <HiX className="w-5 h-5" />
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
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-400 hover:bg-slate-900 hover:text-slate-200 transition-colors"
          >
            <HiOutlineLogout className="w-4.5 h-4.5 shrink-0" />
            Log out
          </button>

          <div className="flex items-center gap-3 pt-3 mt-2 border-t border-slate-800">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium text-slate-300 shrink-0">
              {shortenName()}
            </div>
            <div className="min-w-0">
              <p className="text-sm text-slate-200 truncate">{fullName}</p>
              <p className="text-xs text-slate-500 truncate">{email}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
