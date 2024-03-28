import React from "react";
import './SignInSignUp.css';
function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div>
            <h1>Home Page </h1>
            <h2>Welcome {localStorage.getItem("name")}</h2>
            <button onClick={logout} className="logout">LogOut</button>
            <button onClick={deleteAccount} className="delete">Delete</button>
        </div>
    );
}
export default Home;