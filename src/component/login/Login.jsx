/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import InputControl from "../inputControl/InputControl";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../auth/firebaseAuth";

const Login = () => {
  const emailInputHandler = useRef("");
  const passInputHandler = useRef("");

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    const emailInput = emailInputHandler.current.value;
    const passInput = passInputHandler.current.value;

    // const key = "AIzaSyDATc-65KdaRxfBWjCsZI1NsMqTIRFuaJM";

    console.log(emailInput, passInput);

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
        res.json();
        // if (res.ok) navigate("/form");
        if (res.ok) navigate("/data");
      })
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div>Login</div>
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

        <button>Login</button>
      </form>
      <p>
        {`Don't have an account?`}
        <span>
          <Link to="/Singup">Singup</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
