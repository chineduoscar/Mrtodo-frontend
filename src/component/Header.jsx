import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default function Header() {
  const [open, setOpen] = useState(false);
  const token = Cookies.get("token");
  let decoded;

  if (token) {
    decoded = jwtDecode(token);
  }

  let dashboardLink;

  if (decoded?.role === "admin") {
    dashboardLink = "/admin-dashboard";
  } else {
    dashboardLink = "/dashboard";
  }

  const links = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={"/"} className="flex items-center gap-2 shrink-0">
            <span className="text-lg font-semibold text-slate-100 tracking-tight">
              Mrtodo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to={token ? dashboardLink : "/login"}
              className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-emerald-400 transition-colors"
            >
              {token ? "Dashboard" : "Log in"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to={token ? dashboardLink : "/login"}
                className="mt-2 rounded-md bg-emerald-500 px-3 py-2 text-center text-sm font-medium text-slate-900 hover:bg-emerald-400 transition-colors"
              >
                {token ? "Dashboard" : "Log in"}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
