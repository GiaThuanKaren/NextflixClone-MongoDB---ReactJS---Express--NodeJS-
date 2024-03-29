import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Base_Url, FetchOption } from "../../Api/ApiConfig";
import Detail from "../../Page/Detail/Detail";
import Home from "../../Page/Home/Home";
import MyList from "../../Page/MyList/MyList";
import SearchMovie from "../../Page/SearchMovie/SearchMovie";
import Footer from "../Footer/Footer";
import ListMovieRow from "../ListMovieRow/ListMovieRow";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import "./Header.css";
import User from "../User/User";
import Login_Register, {
  LoginComponent,
  RegisterComponent,
} from "../../Page/Login_Register/Login_Register";
import { useSelector } from "react-redux";
import PrivateRoute from "../../Routes/PrivateRoute";
import { ThemeProvider, createTheme } from "@mui/material";
export const MainHome = function () {

  
  return (
    <>
      
        <NavBar />
        <Slider LinkFetch={Base_Url + FetchOption.fetchNextFlixOriginal} />
        <Home />
        <Footer />
      
    </>
  );
};

export const NavBar = function () {
  const navigate = useNavigate();
  const [close, SetClose] = useState(false);
  const GlobalState = useSelector((state) => state);
  return (
    <>
      <div className="Main-Header">
        <div
          onClick={() => {
            navigate("/");
          }}
          style={{
            backgroundImage: `url(https://cdn.icon-icons.com/icons2/3053/PNG/512/netflix_macos_bigsur_icon_189917.png)`,
          }}
          className="Logo-Header"
        ></div>
        <label htmlFor="idcheck">
          <FontAwesomeIcon className="icon-bar" icon={faBars} />
        </label>
        <input id="idcheck" type="checkbox" />
        <ul className="Header-navigate">
          <label htmlFor="idcheck">
            <FontAwesomeIcon className="icon-Close" icon={faTimes} />
          </label>
          <Link to="/" className="Header-navigate-item">
            Home
          </Link>
          <Link to="" className="Header-navigate-item">
            Up Coming
          </Link>
          <li className="Header-navigate-item">News</li>
          {GlobalState.isLogin ? (
            <Link to="/MyList" className="Header-navigate-item">
              My List
            </Link>
          ) : (
            ""
          )}
        </ul>
        <Search />
        <User />
      </div>
    </>
  );
};
function MainComponent() {
  
  const [state, SetState] = useState(false);
  const Handle = function () {
    SetState(!state);
  };
  return (
    <>
      <Routes>
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Search" element={<SearchMovie />} />

        <Route path="/Login_Register" element={<Login_Register />}>
          <Route path="regis" element={<RegisterComponent />} />
          <Route path="login" element={<LoginComponent />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/MyList" element={<MyList />} />
        </Route>

        <Route path="/" element={<MainHome />} />
      </Routes>
    </>
  );
}

export default MainComponent;
