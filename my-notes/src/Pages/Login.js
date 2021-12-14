import React from "react";
import { NavLink } from 'react-router-dom';

function LoginPage() {
    return ( 
        <div>
            <form>
                <h3>Login</h3>
                <input type="text" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <input type="submit" placeholder="Submit"></input>
                <NavLink to="/register">Register</NavLink>
            </form>
        </div>
     );
}

export default LoginPage;