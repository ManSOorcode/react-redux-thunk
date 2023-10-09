import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUserData } from "../store/action";
import { Link, useNavigate } from "react-router-dom";

const UserForm = () => {
  const [userContact, setUserContact] = useState({
    name: "",
    number: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const changehandler = (key, value) => {
    return setUserContact((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setUserContact({
      name: "",
      number: "",
    });

    if (userContact.name && userContact.number) {
      dispatch(postUserData(userContact));
      navigate("/data");
    }
  };

  return (
    <>
      <li>
        <Link to="/">To Dashboard</Link>
      </li>{" "}
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input
            value={userContact.name}
            type="text"
            placeholder="Type your Name"
            onChange={(e) => changehandler("name", e.target.value)}
          />
          <label>Number</label>
          <input
            value={userContact.number}
            type="number"
            placeholder="Type your Number"
            onChange={(e) => changehandler("number", e.target.value)}
          />
        </div>
        <button>Click</button>
      </form>
    </>
  );
};

export default UserForm;
