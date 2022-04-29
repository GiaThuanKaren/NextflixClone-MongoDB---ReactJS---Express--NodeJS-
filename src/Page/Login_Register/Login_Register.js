import { Link, Outlet, Route, Routes, useRoutes } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { NavBar } from "../../Components/Header/Header";

import "../../grid.css";
import "./Login_Register.css";
import "./responsive.css";
export const LoginComponent = function () {
  return (
    <>
      <div className="form-container">
        <div className="form-body">
          <div className="form-header">
            <h3>Đăng Nhập</h3>
            <Link to="/Login_Register/regis">Đăng Ký</Link>
          </div>
          <div className="form-container-form">
            <input
              required
              placeholder="Email của bạn"
              type="email"
              name="email"
            />
            <input required placeholder="Nhập mật khẩu" type="password" />
          </div>
        </div>
      </div>
    </>
  );
};

export const RegisterComponent = function () {
  return (
    <>
      <div className="form-container">
        <div className="form-body">
          <div className="form-header">
            <h3>Đăng Ký</h3>
            <Link to="/Login_Register/login">Đăng Nhập</Link>
          </div>
          <div className="form-container-form">
            <input
              required
              placeholder="Tên Đăng ký "
              type="text"
              name="name"
            />
            <input
              required
              placeholder="Email của bạn"
              type="email"
              name="email"
            />
            <input required placeholder="Nhập mật khẩu" type="password" />
            <input required placeholder="Nhập lại mật khẩu" type="password" />
          </div>
        </div>
      </div>
    </>
  );
};

const Login_Register = function () {
  useRoutes;
  return (
    <>
      <NavBar />
      <div className="Main-container-Login-Register">
        <div className="Login-Register-body">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login_Register;
