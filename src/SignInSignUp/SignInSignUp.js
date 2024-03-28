import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import './SignInSignUp.css';

function SignInSignupWithLocalStorage() {
   const name = useRef();
   const email = useRef();
   const password = useRef();
   const [showHome, setShowHome] = useState(false);
   const [show, setShow] = useState(false);
   const localSignUp = localStorage.getItem("signUp");
   const localEmail = localStorage.getItem("email");
   const localPassword = localStorage.getItem("password");
   const localName = localStorage.getItem("name");

   useEffect(() => {
      if (localSignUp) {
         setShowHome(true);
      }
      if (localEmail) {
         setShow(true);
      }
   }, [localSignUp, localEmail]);

   const handleClick = () => {
      if (name.current.value && email.current.value && password.current.value) {
         localStorage.setItem("name", name.current.value);
         localStorage.setItem("email", email.current.value);
         localStorage.setItem("password", password.current.value);
         localStorage.setItem("signUp", email.current.value);
         alert("Account created successfully!!");
         window.location.reload();
      }
   };

   const handleSignIn = () => {
      if (email.current.value === localEmail && password.current.value === localPassword) {
         localStorage.setItem("signUp", email.current.value);
         window.location.reload();
      } else {
         alert("Please Enter valid Credential");
      }
   };

   const handleSignUpPage = () => {
      setShow(false); 
   };

   return (
      <div>
         {showHome ? (
            <Home />
         ) : (
            <div className="container">
               {show ? (
                  <div>
                     <h1>Hello {localName}</h1>
                     <div className="input_space">
                        <input placeholder="Email" type='text' ref={email} />
                     </div>
                     <div className="input_space">
                        <input placeholder="Password" type='password' ref={password} />
                     </div>
                     <button onClick={handleSignIn}>Sign In</button>
                  </div>
               ) : (
                  <div>
                     <div className="input_space">
                        <input placeholder="Name" type='text' ref={name} />
                     </div>
                     <div className="input_space">
                        <input placeholder="Email" type='text' ref={email} />
                     </div>
                     <div className="input_space">
                        <input placeholder="Password" type='password' ref={password} />
                     </div>
                     {/* <button onClick={handleClick}>Sign Up</button> */}
                  </div>
               )}
               {!show && (
                 <button onClick={() => setShow(true)}>Sign Up</button>

               )}
               {show && (
                  <p>
                     Don't have an account?{" "}
                     <p onClick={handleSignUpPage}>Sign Up</p>
                  </p>
               )}
            </div>
         )}
      </div>
   );
}

export default SignInSignupWithLocalStorage;
