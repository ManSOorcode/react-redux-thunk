/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../inputControl/InputControl";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebaseAuth";

const Login = () => {
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
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password
      );

      navigate("/form");
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <div>Login</div>
      <form onSubmit={submitHandler}>
        <div>
          <InputControl
            label="email"
            placeholder="Write your correct email"
            onChange={(e) => datahandler("email", e.target)}
          />
          <InputControl
            label="password"
            placeholder="type right Password"
            onChange={(e) => datahandler("password", e.target)}
          />
        </div>
        <p>{errorMsg}</p>
        <button disabled={!formValid}>Login</button>
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
