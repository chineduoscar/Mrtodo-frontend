import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = () => {
  const token = Cookies.get("token");
  let isValid = true;
  console.log(token);

  try {
    if (!token) {
      isValid = false;
    }
    const decoded = jwtDecode(token);

    if (!decoded.exp || decoded.exp * 1000 < new Date().getTime()) {
      isValid = false;
    }
  } catch (error) {
    console.log(error);
    isValid = false;
  }

  if (!isValid) {
    Cookies.remove("token");
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
