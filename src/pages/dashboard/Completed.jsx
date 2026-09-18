import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { MdCheckCircle, MdDelete } from "react-icons/md";
import TodoDetailModal from "../../component/modal/TodoDetailModal";

const Completed = () => {
  const token = Cookies.get("token");

  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/todos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos();
  }, [token]);

  const uncomplete = async (id) => {
    try {
      const task = tasks.find((t) => t._id === id);
      const response = await axios.patch(
        `http://localhost:3000/todos/${id}`,
        { completed: !task.completed },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setTasks((prev) =>
        prev.map((t) => (t._id === id ? response.data.data : t)),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-100">Completed</h1>
        <p className="mt-1 text-sm text-slate-500">
          Tasks you've already knocked out.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-950/60 shadow-2xl shadow-black/30">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
          <span className="text-sm font-medium text-slate-300">Completed</span>
          <span className="text-xs text-slate-500">
            {completedTasks.length} done
          </span>
        </div>

        {completedTasks.length === 0 && (
          <p className="px-5 py-6 text-sm text-slate-500">
            No completed tasks yet.
          </p>
        )}

        <ul className="divide-y divide-slate-800">
          {completedTasks.map((task) => (
            <li key={task._id} className="flex items-center">
              <button
                onClick={() => uncomplete(task._id)}
                className="flex items-center gap-3 px-5 py-3.5 text-left hover:bg-slate-900/60 transition-colors"
              >
                <MdCheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm text-slate-500 line-through">
                  {task.title}
                </span>
              </button>

              <button
                onClick={() => setSelectedTask(task)}
                className="ml-1 text-xs text-emerald-400/80 hover:text-emerald-300 transition-colors"
              >
                Read more
              </button>

              <div className="flex-1" />

              <button
                onClick={() => deleteTodo(task._id)}
                className="px-5 py-3.5 text-slate-500 hover:text-red-400 transition-colors"
              >
                <MdDelete className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedTask && (
        <TodoDetailModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </div>
  );
};

export default Completed;
