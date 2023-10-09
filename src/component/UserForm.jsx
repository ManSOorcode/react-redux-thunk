import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formUserContacts, postUserData } from "../store/action";

const UserForm = () => {
  const [userContact, setUserContact] = useState({
    name: "",
    number: "",
  });

  const dispatch = useDispatch();

  const changehandler = (key, value) => {
    return setUserContact((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(userContact);
    dispatch(formUserContacts(userContact));
    dispatch(postUserData(userContact));
    setUserContact({
      name: "",
      number: "",
    });
  };

  //   useEffect(() => {
  //     console.log(JSON.stringify(userContact));
  // dispatch(postUserData(userContact));
  //   }, [userContact, dispatch]);
  return (
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
  );
};

export default UserForm;
