import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // wire up to your auth logic
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-slate-100 tracking-tight">
          Welcome back
        </h1>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
          Pick up your list where you left it.
        </p>

        <div onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-slate-400 mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="password"
                className="block text-sm text-slate-400"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                Forgot?
              </a>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-medium text-sm py-2.5 flex items-center justify-center gap-1.5 transition-colors"
          >
            Sign in
            <HiOutlineArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-8 text-sm text-slate-500 text-center">
          New here?{" "}
          <a href="#" className="text-emerald-400 hover:text-emerald-300">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}
