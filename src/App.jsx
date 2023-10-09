import { useEffect, useState } from "react";

// import "./App.css";
import { fetchUserData } from "./store/action";
import { useDispatch, useSelector } from "react-redux";
import UserData from "./component/UserData";
import UserForm from "./component/UserForm";

function App() {
  const result = useSelector((state) => state.result);

  const dispatch = useDispatch();

  console.log(result);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <>
      <UserForm />
      <UserData contacts={result} />
    </>
  );
}

export default App;
