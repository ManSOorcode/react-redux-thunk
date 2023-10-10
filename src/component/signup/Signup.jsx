/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import InputControl from "../inputControl/InputControl";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../auth/firebaseAuth";

const Signup = () => {
  const emailInputHandler = useRef("");
  const passInputHandler = useRef("");
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  // const [errorMsg, seterrorMsg] = useState("");

  let formValid = false;

  if (userDetails.email && userDetails.password) {
    formValid = true;
  }

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const emailInput = emailInputHandler.current.value;
    const passInput = passInputHandler.current.value;

    const key = "AIzaSyDATc-65KdaRxfBWjCsZI1NsMqTIRFuaJM";

    console.log(emailInput, passInput);

    // try {
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDATc-65KdaRxfBWjCsZI1NsMqTIRFuaJM`,
      {
        method: "POST",
        body: JSON.stringify({
          email: emailInput,
          password: passInput,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) navigate("/login");
        console.log(res);
      })
      .catch((err) => {
        //     // seterrorMsg(err.message);
        console.log(err.message);
      });
  };

  return (
    <>
      <div>
        <div>SingUp</div>
        <form onSubmit={submitHandler}>
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Write your email"
              ref={emailInputHandler}
            />
            <label>Password</label>
            <input
              type="text"
              placeholder="type strong Password"
              ref={passInputHandler}
            />
          </div>

          <button type="submit">singup</button>
        </form>
        <p>
          Already have an account?
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Signup;
