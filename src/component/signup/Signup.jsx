/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../inputControl/InputControl";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../auth/firebaseAuth";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
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

    // createUserWithEmailAndPassword(
    //   auth,
    //   userDetails.email,
    //   userDetails.password
    // )
    //   .then(async (res) => {
    //     console.log(res);
    //     const user = res.user;

    //     //function(userDeatil, {whatdetail you want to update})
    //     await updateProfile(user, { displayName: user.name });

    //     navigate("/");
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     seterrorMsg(err.message);
    //     // console.log(err.message);
    //   });
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password
      );
      const user = res.user;

      //function(userDeatil, {whatdetail you want to update})
      await updateProfile(user, { displayName: user.name });

      navigate("/");
      console.log(res);
    } catch (err) {
      seterrorMsg(err.message);
      // console.log(err.message);
    }
  };
  return (
    <>
      {/* <li>
        <Link to="login">click to login</Link>
      </li> */}

      <div>
        <div>SingUp</div>
        <form onSubmit={submitHandler}>
          <div>
            <InputControl
              onChange={(e) => datahandler("name", e.target)}
              label="name"
              placeholder="Write your name"
            />
            <InputControl
              onChange={(e) => datahandler("email", e.target)}
              label="email"
              placeholder="Write your email"
            />
            <InputControl
              onChange={(e) => datahandler("password", e.target)}
              label="password"
              placeholder="type strong Password"
            />
          </div>
          {/* <p>{errorMsg}</p> */}
          <button disabled={!formValid}>singup</button>
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
