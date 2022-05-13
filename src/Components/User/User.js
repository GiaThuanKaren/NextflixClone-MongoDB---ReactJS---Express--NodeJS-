import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../grid.css";
import "./User.css";

const User = function () {
  const selectState = useSelector((state) => state);
  console.log(selectState);
  return (
    <>
      <div className="User-Profile">
        <ul className="List-Navbar">
          <li className="List-Navbar-Item">Profie</li>
          {selectState.isLogin ? (
            <>
              <Link className="List-Navbar-Item" to="/Login_Register/login">
                Logout
              </Link>
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
