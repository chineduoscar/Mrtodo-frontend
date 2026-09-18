import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { HiOutlineUsers, HiOutlineSearch } from "react-icons/hi";

export default function AdminDashboard() {
  const token = Cookies.get("token");

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:3000/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data.users);
      } catch (err) {
        console.log(err);
        setError("Couldn't load users. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [token]);

  const filteredUsers = users.filter((user) => {
    const query = search.toLowerCase();
    return (
      user.fullName?.toLowerCase().includes(query) ||
      user.email?.toLowerCase().includes(query)
    );
  });

  const adminCount = users.filter((u) => u.role === "admin").length;

  return (
    <div className="min-h-screen bg-black px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-100">Users</h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage everyone registered on the platform.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="rounded-xl border border-slate-900 bg-slate-950 p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
            <HiOutlineUsers className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-2xl font-semibold text-slate-100">
              {users.length}
            </p>
            <p className="text-sm text-slate-500">Total users</p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-900 bg-slate-950 p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
            <HiOutlineUsers className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-2xl font-semibold text-slate-100">
              {adminCount}
            </p>
            <p className="text-sm text-slate-500">Admins</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email"
          className="w-full rounded-md border border-slate-900 bg-slate-950 pl-9 pr-3 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        />
      </div>

      {/* User list */}
      <div className="rounded-xl border border-slate-900 bg-slate-950 shadow-2xl shadow-black/60">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-900">
          <span className="text-sm font-medium text-slate-300">All users</span>
          <span className="text-xs text-slate-500">
            {filteredUsers.length} shown
          </span>
        </div>

        {loading && (
          <p className="px-5 py-6 text-sm text-slate-500">Loading users…</p>
        )}

        {!loading && error && (
          <p className="px-5 py-6 text-sm text-red-400">{error}</p>
        )}

        {!loading && !error && filteredUsers.length === 0 && (
          <p className="px-5 py-6 text-sm text-slate-500">
            No users match your search.
          </p>
        )}

        {!loading && !error && filteredUsers.length > 0 && (
          <ul className="divide-y divide-slate-900">
            {filteredUsers.map((user) => (
              <li
                key={user._id}
                className="flex items-center gap-3 px-5 py-3.5 hover:bg-slate-900/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-xs font-medium text-slate-300 shrink-0">
                  {user.fullName?.slice(0, 2).toUpperCase()}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-200 truncate">
                    {user.fullName}
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    {user.email}
                  </p>
                </div>

                <span
                  className={`text-xs px-2 py-1 rounded-full shrink-0 ${
                    user.role === "admin"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-slate-900 text-slate-400"
                  }`}
                >
                  {user.role || "user"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
