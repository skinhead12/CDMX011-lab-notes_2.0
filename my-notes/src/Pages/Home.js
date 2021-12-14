import { NavLink } from "react-router-dom";

function HomePage() {
    return ( 
        <div>
            <h2>Welcome</h2>
            <NavLink to="/login">
            <button>Login</button>
            </NavLink>
            <NavLink to="/register">
            <button>Register</button>
            </NavLink>
        </div>
     );
}

export default HomePage;