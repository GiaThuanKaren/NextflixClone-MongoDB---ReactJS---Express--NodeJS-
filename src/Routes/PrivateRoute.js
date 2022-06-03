import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { MainHome } from "../Components/Header/Header";
import NotLogin from "../Components/Not Login/NotLogin";

function PrivateRoute() {

  const selector = useSelector((state) => state);
  return selector.isLogin ? <Outlet/> : <NotLogin />
}
export default PrivateRoute;
