import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../grid.css";
import { SETLOGIN } from "../../Redux/Actions/Actions";
import "./User.css";

const User = function () {
  const [isActive, SetisActive] = useState(false);
  const User = JSON.stringify(localStorage.getItem("user"));
  const ViewRecent = JSON.stringify(localStorage.getItem("recent"));
  const selectState = useSelector((state) => state);
  console.log(selectState);
  const dispatch = useDispatch();
  // const
  useEffect(() => {
    if (isActive) {
      fetch(`http://localhost:5000/user?id=${User.id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ViewRecent}),
      })
        .then((itemUpdated) => {
          localStorage.removeItem("recent");
          localStorage.removeItem("user");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  });

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
                  SetisActive(true);
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
