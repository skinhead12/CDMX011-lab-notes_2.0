import { NavLink } from "react-router-dom";

import './forms.css';

const HomePage = () => {
    return ( 
        <div className="Container-btns">
            <h2 className="tittle-one">Welcome</h2>
            <NavLink to="/login">
            <button className="btn-login">Login</button>
            </NavLink>
            <NavLink to="/register">
            <button className="btn-register">Register</button>
            </NavLink>
        </div>
     );
}

export default HomePage;