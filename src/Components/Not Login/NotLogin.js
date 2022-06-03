import "../../grid.css";
import Footer from "../Footer/Footer";
import { NavBar } from "../Header/Header";
import "./NotLogin.css";

function NotLogin() {
  return (
    <>
      <NavBar />
      <div className="MainContainer-NotFound">
        <div>
          <h1>May Be You Need To Login To See This Contend</h1>
          <img src="https://img.freepik.com/free-vector/login-access-denied-vector-illustration-system-refuses-password-error-entry-computer-device-showing-user-does-have-permission-website-mobile-development_2175-1266.jpg" />
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default NotLogin;
