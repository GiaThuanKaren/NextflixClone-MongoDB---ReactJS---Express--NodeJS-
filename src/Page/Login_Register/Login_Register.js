import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, Route, Routes, useNavigate, useRoutes } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { NavBar } from "../../Components/Header/Header";
import * as IconSolid from "@fortawesome/free-solid-svg-icons";
import "../../grid.css";
import "./Login_Register.css";
import "./responsive.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SETCURFILM, SETLOGIN } from "../../Redux/Actions/Actions";
export const LoginComponent = function () {
  return (
    <>
      <div className="form-container">
        <div className="form-body">
          <div className="form-header">
            <h3>Đăng Nhập</h3>
            {/* <Link to="/Login_Register/regis">Đăng Ký</Link> */}
          </div>
          <div className="form-container-form">
            <input
              className="input-login-form"
              required
              placeholder="Email của bạn"
              type="email"
              name="email"
            />

            <input
              className="input-login-form"
              required
              placeholder="Nhập mật khẩu"
              type="password"
            />
          </div>
          <div
            className="primary-btn"
            style={{ color: "#ffff", fontWeight: "bold" }}
          >
            Đăng Nhập
          </div>

          <div
            className="sign-in-Notice"
            style={{ display: "flex", gap: "10px" }}
          >
            <p style={{ color: " rgb(98 95 95)" }}>New to NextFlix</p>
            <Link style={{ color: "#fff" }} to="/Login_Register/regis">
              Sign up Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const RegisterComponent = function () {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const ArrSelecttion = ["Basic", "Standar", "Premium"];
  const [properties, Setproperties] = useState({
    Email: "",
    Pass: "",
    Submit: false,
    isSucced:false,
  });
  const Dispatch = useDispatch();
  
  // const
  useEffect(() => {
    if (properties.Submit) {
      fetch(
        `http://localhost:81/backend/Api/Customer.php?Email=${properties.Email}&pass=${properties.Pass}&regis`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
        .then((item) => item.json())
        .then(function (item) {
          console.log(item);
          if (item.result == "DUPLICATE") {
            alert("Tài Khoản Đã Tồn Tại Trong Hệ Thống");
            Setproperties({
              ...properties,
              Submit: false,
            });
          } else {
            Setproperties({
              ...properties,
              isSucced:true,
            });
            Dispatch(SETLOGIN(true));
            navigate('/');
            alert("Dăng ký Thành Công");
          }
        })
        .catch(function (e) {
          console.log("Error Fetch");
        });
    }
  }, [properties.Submit]);
  return (
    <>
      <div className="Main-Regis-Container">
        <div className="grid wide ">
          <div className="Choose-Plan-Container">
            <div className="Choose-Plan-Heading">
              <h1>Choose the plan that's right for you</h1>
              <h3>Downgrage or upgrage at any time</h3>
            </div>
            <div className="Choose-Plan-Body">
              <ul className="Choose-Plan-Body-List">
                {ArrSelecttion.map(function (item, dix) {
                  return (
                    <li
                      key={item}
                      onClick={(e) => {
                        // ChangeClass(e.target)
                        setActive(dix);
                      }}
                      className={`Choose-Plan-Body-List-item ${
                        dix == active ? "active" : "unactive"
                      }`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="Choose-Plan-List-Permissions">
              <div className="Choose-Plan-List-Permissions-item">
                <p>Price after free month ends on </p>
                <div className="Choose-Plan-List-Permissions-item-benefit">
                  <p className={`${0 == active ? "active" : "unactive"}`}>
                    A8.19$
                  </p>
                  <p className={`${1 == active ? "active" : "unactive"}`}>
                    A12.3$
                  </p>
                  <p className={`${2 == active ? "active" : "unactive"}`}>
                    A18.20$
                  </p>
                </div>
              </div>
            </div>
            <div className="Choose-Plan-List-Permissions">
              <div className="Choose-Plan-List-Permissions-item">
                <p>HD Available</p>
                <div className="Choose-Plan-List-Permissions-item-benefit">
                  <FontAwesomeIcon
                    className={`${0 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faTimes}
                  />
                  <FontAwesomeIcon
                    className={`${1 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                  <FontAwesomeIcon
                    className={`${2 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                </div>
              </div>
            </div>
            <div className="Choose-Plan-List-Permissions">
              <div className="Choose-Plan-List-Permissions-item">
                <p>Ultra HD ( when available)</p>
                <div className="Choose-Plan-List-Permissions-item-benefit">
                  <FontAwesomeIcon
                    className={`${0 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faTimes}
                  />
                  <FontAwesomeIcon
                    className={`${1 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faTimes}
                  />
                  <FontAwesomeIcon
                    className={`${2 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                </div>
              </div>
            </div>
            <div className="Choose-Plan-List-Permissions">
              <div className="Choose-Plan-List-Permissions-item">
                <p>Screens you can wach on the same time</p>
                <div className="Choose-Plan-List-Permissions-item-benefit">
                  <p className={`${0 == active ? "active" : "unactive"}`}>1</p>
                  <p className={`${1 == active ? "active" : "unactive"}`}>2</p>
                  <p className={`${2 == active ? "active" : "unactive"}`}>3</p>
                </div>
              </div>
            </div>
            <div className="Choose-Plan-List-Permissions">
              <div className="Choose-Plan-List-Permissions-item">
                <p>Watch on your laptop , TV , phone and tablet</p>
                <div className="Choose-Plan-List-Permissions-item-benefit">
                  <FontAwesomeIcon
                    className={`${0 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                  <FontAwesomeIcon
                    className={`${1 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                  <FontAwesomeIcon
                    className={`${2 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                </div>
              </div>
            </div>
            <div className="Choose-Plan-List-Permissions">
              <div className="Choose-Plan-List-Permissions-item">
                <p>Unlimted movies and TV shows</p>
                <div className="Choose-Plan-List-Permissions-item-benefit">
                  <FontAwesomeIcon
                    className={`${0 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                  <FontAwesomeIcon
                    className={`${1 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                  <FontAwesomeIcon
                    className={`${2 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                </div>
              </div>
            </div>
            <div className="Choose-Plan-List-Permissions">
              <div className="Choose-Plan-List-Permissions-item">
                <p>Cancel at any time</p>
                <div className="Choose-Plan-List-Permissions-item-benefit">
                  <FontAwesomeIcon
                    className={`${0 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                  <FontAwesomeIcon
                    className={`${1 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                  <FontAwesomeIcon
                    className={`${2 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                </div>
              </div>
            </div>
            <div className="Choose-Plan-List-Permissions">
              <div className="Choose-Plan-List-Permissions-item">
                <p>First month free</p>
                <div className="Choose-Plan-List-Permissions-item-benefit">
                  <FontAwesomeIcon
                    className={`${0 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                  <FontAwesomeIcon
                    className={`${1 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                  <FontAwesomeIcon
                    className={`${2 == active ? "active" : "unactive"}`}
                    icon={IconSolid.faCheck}
                  />
                </div>
              </div>
            </div>
            <div className="Regist_form_Container">
              <div className="form-body">
                <div className="form-header">
                  <h1 style={{ margin: "5px 0" }}>
                    Sign up to start your free month
                  </h1>
                  {/* <Link to="/Login_Register/regis">Đăng Ký</Link> */}
                </div>
                <div className="form-container-form">
                  <h3>Create your account:</h3>
                  <input
                    onChange={(e) => {
                      Setproperties({
                        ...properties,
                        Email: e.target.value,
                      });
                    }}
                    value={properties.Email}
                    style={{ margin: "5px 0", border: "1px solid #ccc" }}
                    className="input-login-form"
                    required
                    placeholder="Email của bạn"
                    type="email"
                    name="email"
                  />

                  <input
                    onChange={(e) => {
                      Setproperties({
                        ...properties,
                        Pass: e.target.value,
                      });
                    }}
                    value={properties.Pass}
                    style={{ margin: "5px 0", border: "1px solid #ccc" }}
                    className="input-login-form"
                    required
                    placeholder="Nhập mật khẩu"
                    type="password"
                  />
                </div>
                <div
                  onClick={(e) => {
                    Setproperties({
                      ...properties,
                      Submit: true,
                    });
                  }}
                  className="primary-btn"
                  style={{
                    color: "#ffff",
                    fontWeight: "bold",
                    backgroundColor: "rgb(9, 113, 248)",
                    width: "50%",
                    margin: "5px 0",
                  }}
                >
                  Đăng Ký
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Logout=function(){
  
}

const Login_Register = function () {
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
