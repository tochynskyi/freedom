import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
const PrivateRoute = () => {
  const { authToken } = useAuth();
  console.log(authToken)
  return authToken ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
