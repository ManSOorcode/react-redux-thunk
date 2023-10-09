import React from "react";
import { Link } from "react-router-dom";
import InputControl from "../inputControl/InputControl";

const Login = () => {
  return (
    // <li>
    //   <Link to="form">click to move on user form</Link>
    // </li>

    <div>
      <div>Login</div>
      <form>
        <div>
          <InputControl label="email" placeholder="Write your correct email" />
          <InputControl label="password" placeholder="type right Password" />
        </div>
        <button>Login</button>
      </form>
      <p>
        Don't have an account?
        <span>
          <Link to="/Singup">Singup</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
