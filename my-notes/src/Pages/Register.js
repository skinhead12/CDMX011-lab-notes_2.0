import React from "react";
import { NavLink } from "react-router-dom";

import firebaseApp from "../firebase/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const auth = getAuth (firebaseApp);


const RegisterPage = () => {


    async function handleSubmit(e){
        e.preventDefault();
        const emailValue = e.target.emailVal.value;
        const passValue = e.target.passVal.value;
        const confirmValue = e.target.confirmVal.value;
        console.log(emailValue, passValue, confirmValue)
        const userRegister = await createUserWithEmailAndPassword(auth, emailValue, passValue, confirmValue);
        console.log(userRegister)
    }

    return (         

        <div>
        <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>
            <input type="text" placeholder="Email" Id="emailVal"></input>
            <input type="password" placeholder="Password" Id="passVal"></input>
            <input type="password" placeholder="Confirm Password" Id="confirmVal"></input>
            <input type="submit" placeholder="Submit"></input>
            <select>User Type
                <option value="premium">
                    Premium
                </option>
                <option value="standar">
                    Standar
                </option>
            </select>
            <NavLink to="/login">Login</NavLink>
        </form>
       <NavLink to="/"><button>back</button></NavLink> 
    </div>
     );
}

export default RegisterPage;