import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import Login from "./pages/main/Login";
import Register from "./pages/main/Register";

import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./middleware/ProtectedRoute";
import AllTodos from "./pages/dashboard/AllTodos";
import Completed from "./pages/dashboard/Completed";
import AdminRoute from "./middleware/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="todos" element={<AllTodos />} />
            <Route path="completed" element={<Completed />} />
          </Route>
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
