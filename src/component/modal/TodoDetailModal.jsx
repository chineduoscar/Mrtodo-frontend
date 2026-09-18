import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { MdClose, MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";

export default function TodoDetailModal({ task, onClose }) {
  const [todo, setTodo] = useState(null);

  const token = Cookies.get("token");

  useEffect(() => {
    const fetchSingleTodo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/todos/${task._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log(response.data);
        setTodo(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleTodo();
  }, [task, token]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-950 shadow-2xl shadow-black/40"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
          <span className="text-sm font-medium text-slate-300">
            Task details
          </span>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-300 transition-colors"
          >
            <MdClose className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 py-5 space-y-4">
          {todo && (
            <>
              <div className="flex items-start gap-3">
                {todo.completed ? (
                  <MdCheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <MdRadioButtonUnchecked className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                )}

                <h2
                  className={
                    todo.completed
                      ? "text-lg font-semibold text-slate-500 line-through"
                      : "text-lg font-semibold text-slate-100"
                  }
                >
                  {todo.title}
                </h2>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">
                  Description
                </p>

                <p className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {todo.description
                    ? todo.description
                    : "No description provided."}
                </p>
              </div>

              <div className="pt-2">
                <span
                  className={
                    todo.completed
                      ? "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400"
                      : "inline-flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400"
                  }
                >
                  {todo.completed ? "Completed" : "Pending"}
                </span>
              </div>
            </>
          )}
        </div>

        <div className="px-5 py-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-200 hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
