import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../grid.css";
import { SETLOGIN } from "../../Redux/Actions/Actions";
import "./User.css";

const User = function () {
  const selectState = useSelector((state) => state);
  console.log(selectState);
  const dispatch = useDispatch();
  // const
  return (
    <>
      <div className="User-Profile">
        <ul className="List-Navbar">
          {selectState.isLogin ? (
            <>
              <li className="List-Navbar-Item">Change User</li>
              <li
                onClick={() => {
                  alert("Đăng xuất thành công");
                  localStorage.removeItem("recent");
                  localStorage.removeItem("user");
                  dispatch(SETLOGIN(false));
                }}
                className="List-Navbar-Item"
              >
                Logout
              </li>
              <li className="List-Navbar-Item">Upgrade</li>
            </>
          ) : (
            <>
              <Link className="List-Navbar-Item" to="/Login_Register/login">
                Login
              </Link>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default User;
