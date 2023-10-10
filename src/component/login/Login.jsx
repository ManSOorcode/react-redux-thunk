/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import InputControl from "../inputControl/InputControl";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebaseAuth";

const Login = () => {
  const emailInputHandler = useRef("");
  const passInputHandler = useRef("");
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, seterrorMsg] = useState("");

  const datahandler = (key, value) => {
    return setUserDetails((prev) => ({ ...prev, [key]: value }));
  };

  let formValid = false;

  if (userDetails.name && userDetails.email && userDetails.password) {
    formValid = true;
  }

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await signInWithEmailAndPassword(
    //     auth,
    //     userDetails.email,
    //     userDetails.password
    //   );

    //   navigate("/form");
    //   console.log(res);
    // } catch (err) {
    //   console.log(err.message);
    // }

    const emailInput = emailInputHandler.current.value;
    const passInput = passInputHandler.current.value;

    const key = "AIzaSyDATc-65KdaRxfBWjCsZI1NsMqTIRFuaJM";
    // console.log(userDetails);

    console.log(emailInput, passInput);

    // try {
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDATc-65KdaRxfBWjCsZI1NsMqTIRFuaJM`,
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
        console.log(res);
        if (res.ok) navigate("/form");
      })
      .catch((err) => {
        //     // seterrorMsg(err.message);
        console.log(err.message);
      });
  };
  return (
    <div>
      <div>Login</div>
      <form onSubmit={submitHandler}>
        <div>
          {/* <InputControl
            label="email"
            placeholder="Write your correct email"
            onChange={(e) => datahandler("email", e.target)}
          />
          <InputControl
            label="password"
            placeholder="type right Password"
            onChange={(e) => datahandler("password", e.target)}
          /> */}

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
        {/* <p>{errorMsg}</p> */}
        {/* <button disabled={!formValid} type="submit"> */}

        {/* <p>{errorMsg}</p> */}
        {/* <button disabled={!formValid}> */}
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
