import { useEffect } from "react";

// import "./App.css";
import { fetchUserData } from "./store/action";
import { useDispatch } from "react-redux";

function App() {
  // const userData = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  // console.log(userData);

  useEffect(() => {
    console.log("hello");
    dispatch(fetchUserData());
  }, []);

  return <>{/* <div>{userData}</div> */}</>;
}

export default App;
