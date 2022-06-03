import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { MainHome } from "../Components/Header/Header";
import NotLogin from "../Components/Not Login/NotLogin";
import { LoginComponent } from "../Page/Login_Register/Login_Register";

function PrivateRoute() {

  const selector = useSelector((state) => state);
  return selector.isLogin ? <Outlet/> : <Navigate to="/Login_Register/login" />
}
export default PrivateRoute;
