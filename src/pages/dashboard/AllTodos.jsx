import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  MdCheckCircle,
  MdRadioButtonUnchecked,
  MdDelete,
} from "react-icons/md";
import TodoDetailModal from "../../component/modal/TodoDetailModal";

const AllTodos = () => {
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

  const toggle = async (id) => {
    console.log("clicked");
    try {
      const task = tasks.find((task) => {
        return task._id === id;
      });
      const response = await axios.get(
        `http://localhost:3000/todos/${id}`,
        { completed: !task.completed },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setTasks(response.data.data);
      console.log(response.data.data);

      setTasks((prev) =>
        prev.map((task) => {
          if (task._id === id) {
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task;
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    setTasks((prev) => prev.filter((task) => task._id !== id));
  };

  const doneCount = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-100">All todos</h1>
        <p className="mt-1 text-sm text-slate-500">
          Everything on your list, done or not.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-950/60 shadow-2xl shadow-black/30">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
          <span className="text-sm font-medium text-slate-300">All todos</span>
          <span className="text-xs text-slate-500">
            {doneCount}/{tasks.length} done
          </span>
        </div>

        {tasks.length === 0 && (
          <p className="px-5 py-6 text-sm text-slate-500">
            You don't have any todos yet.
          </p>
        )}

        <ul className="divide-y divide-slate-800">
          {tasks.map((task) => (
            <li key={task._id} className="flex items-center">
              <button
                onClick={() => toggle(task._id)}
                className="flex items-center gap-3 px-5 py-3.5 text-left hover:bg-slate-900/60 transition-colors"
              >
                {task.completed ? (
                  <MdCheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <MdRadioButtonUnchecked className="w-5 h-5 text-slate-600 shrink-0" />
                )}

                <span
                  className={
                    task.completed
                      ? "text-sm text-slate-500 line-through"
                      : "text-sm text-slate-200"
                  }
                >
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

export default AllTodos;
