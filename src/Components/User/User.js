
import { Link, useNavigate } from 'react-router-dom';
import '../../grid.css'
import './User.css';

const User=function(){
   

    return (

    <>
    <div className="User-Profile">
        <ul className="List-Navbar">
            <li className="List-Navbar-Item">Profie</li>
            <Link className="List-Navbar-Item" to="/Login_Register">Login</Link>
            <li className="List-Navbar-Item">Uprage</li>
        </ul>   
    </div>
    </>
    )
}

export default User