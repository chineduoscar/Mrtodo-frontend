import { useState } from "react";
import { HiOutlinePlus, HiOutlineClipboardList } from "react-icons/hi";
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";

export default function DashboardHome() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Ship the Q3 report", done: true },
    { id: 2, title: "Review design handoff", done: true },
    { id: 3, title: "Call with the Lagos team", done: false },
    { id: 4, title: "Plan next sprint", done: false },
    { id: 5, title: "Reply to client feedback", done: false },
  ]);

  const toggle = (id) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );

  const doneCount = tasks.filter((t) => t.done).length;
  const pending = tasks.length - doneCount;

  const stats = [
    { label: "Open tasks", value: pending, icon: HiOutlineClipboardList },
    { label: "Completed", value: doneCount, icon: MdCheckCircle },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-100">Overview</h1>
        <p className="mt-1 text-sm text-slate-500">
          Here's what's on your plate today.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-100">{value}</p>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Task list — same visual language as the Hero mockup */}
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 shadow-2xl shadow-black/30">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
          <span className="text-sm font-medium text-slate-300">Today</span>
          <span className="text-xs text-slate-500">
            {doneCount}/{tasks.length} done
          </span>
        </div>

        <ul className="divide-y divide-slate-800">
          {tasks.map((task) => (
            <li key={task.id}>
              <button
                onClick={() => toggle(task.id)}
                className="w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-slate-900/60 transition-colors"
              >
                {task.done ? (
                  <MdCheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <MdRadioButtonUnchecked className="w-5 h-5 text-slate-600 shrink-0" />
                )}
                <span
                  className={
                    task.done
                      ? "text-sm text-slate-500 line-through"
                      : "text-sm text-slate-200"
                  }
                >
                  {task.title}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <button className="w-full flex items-center gap-2 px-5 py-4 border-t border-slate-800 text-slate-500 hover:text-slate-300 transition-colors">
          <HiOutlinePlus className="w-4 h-4" />
          <span className="text-sm">Add a task</span>
        </button>
      </div>
      <div className="h-600"></div>
    </div>
  );
}
