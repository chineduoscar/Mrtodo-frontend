import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi";
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";

export default function Hero() {
  const [tasks, setTasks] = useState([
    { id: 1, label: "Ship the Q3 report", done: true },
    { id: 2, label: "Review design handoff", done: true },
    { id: 3, label: "Call with the Lagos team", done: false },
    { id: 4, label: "Plan next sprint", done: false },
  ]);

  const toggle = (id) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );

  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <section className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Copy */}
          <div>
            <p className="text-sm font-medium text-emerald-400 mb-4">
              For people who run out of hours, not ideas
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-slate-100 tracking-tight leading-[1.1]">
              Your to-do list, finally under control
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-md leading-relaxed">
              mrtodo gives you one place to capture tasks, sort what matters,
              and track what's done — so your day runs on a plan, not memory.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-sm font-medium text-slate-900 hover:bg-emerald-400 transition-colors"
              >
                Start for free
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-md border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white transition-colors"
              >
                See our products
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              No credit card. Set up your first list in under a minute.
            </p>
          </div>

          {/* Live todo-list mockup */}
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
                      {task.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 px-5 py-4 border-t border-slate-800 text-slate-500">
              <HiOutlinePlus className="w-4 h-4" />
              <span className="text-sm">Add a task</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
