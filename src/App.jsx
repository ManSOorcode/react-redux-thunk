import { useEffect, useState } from "react";

// import "./App.css";
import { fetchUserData } from "./store/action";
import { useDispatch, useSelector } from "react-redux";
import UserData from "./component/UserData";
import UserForm from "./component/UserForm";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Login from "./component/login/Login";
import Singup from "./component/signup/Signup";
import { auth } from "./component/auth/firebaseAuth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/singup" element={<Singup />} />
      {/* <Route path="/form" element={} /> */}
      <Route
        path="/data"
        element={
          <>
            <UserForm />
            <UserData />{" "}
          </>
        }
      />
    </Routes>
  );
}

export default App;
