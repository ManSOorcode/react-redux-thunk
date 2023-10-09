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

function App() {
  const result = useSelector((state) => state.result);

  const dispatch = useDispatch();

  console.log(result);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  // return (
  //   <>
  //     <UserForm />
  //     <UserData contacts={result} />
  //   </>
  // );

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="singup" element={<Singup />} />
      <Route path="login/form" element={<UserForm />} />
      <Route path="login/form/data" element={<UserData contacts={result} />} />
    </Routes>
  );
}

export default App;
