import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const AdminRoute = () => {
  const token = Cookies.get("token");
  let isValid = true;
  let isAdmin = false;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    if (!decoded.exp || decoded.exp * 1000 < new Date().getTime()) {
      isValid = false;
    }

    if (decoded.role === "admin") {
      isAdmin = true;
    } else {
      isAdmin = false;
    }
  } catch (error) {
    console.log(error);
    isValid = false;
  }

  if (!isValid) {
    Cookies.remove("token");
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
