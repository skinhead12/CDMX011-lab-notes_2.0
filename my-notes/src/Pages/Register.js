import { NavLink } from "react-router-dom";

function RegisterPage() {
    return ( 
        <div>
        <form>
            <h3>Sign In</h3>
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <input type="password" placeholder="Confirm Password"></input>
            <input type="submit" placeholder="Submit"></input>
            <select>User Type
                <option>
                    Premium
                </option>
                <option>
                    Standard
                </option>
            </select>
            <NavLink to="/login">Login</NavLink>
        </form>
    </div>
     );
}

export default RegisterPage;