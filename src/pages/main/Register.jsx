import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log(formData);
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        formData,
      );

      const data = response.data;
      Cookies.set("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success(data.message);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-slate-100 tracking-tight">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
          Takes less time than writing your first task.
        </p>

        <div onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-slate-400 mb-1.5"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.fullName}
              name="fullName"
              onChange={handleChange}
              placeholder="Jordan Lee"
              className="w-full bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400"
            />
          </div>

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
              value={formData.email}
              name="email"
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-slate-400 mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              placeholder="At least 8 characters"
              className="w-full bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-medium text-sm py-2.5 flex items-center justify-center gap-1.5 transition-colors"
          >
            Create account
            <HiOutlineArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-6 text-xs text-slate-600 leading-relaxed">
          By creating an account you agree to our{" "}
          <a href="#" className="text-slate-400 hover:text-slate-300">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-slate-400 hover:text-slate-300">
            Privacy Policy
          </a>
          .
        </p>

        <p className="mt-6 text-sm text-slate-500 text-center">
          Already have an account?{" "}
          <a href="#" className="text-emerald-400 hover:text-emerald-300">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
