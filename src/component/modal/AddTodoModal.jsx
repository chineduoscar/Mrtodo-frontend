import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { MdClose } from "react-icons/md";

export default function AddTodoModal({ onClose, onAdded }) {
  const token = Cookies.get("token");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError("Title is required.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/todos",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      onAdded(response.data.data);
      onClose();
    } catch (err) {
      console.log(err);
      setError("Something went wrong while adding the task.");
    } finally {
      setSubmitting(false);
    }
  };

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
          <span className="text-sm font-medium text-slate-300">Add a task</span>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-300 transition-colors"
          >
            <MdClose className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="px-5 py-5 space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wide text-slate-500 mb-1.5">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                name="title"
                onChange={handleChange}
                placeholder="e.g. Finish project report"
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wide text-slate-500 mb-1.5">
                Description
              </label>
              <textarea
                value={formData.description}
                name="description"
                onChange={handleChange}
                placeholder="Add more detail about this task..."
                rows={4}
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 resize-none"
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}
          </div>

          <div className="px-5 py-4 border-t border-slate-800 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-200 hover:bg-slate-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-colors disabled:opacity-50"
            >
              {submitting ? "Adding..." : "Add task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
