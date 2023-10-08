import React, { useState } from "react";

const UserForm = () => {
  const [userContact, setUserContact] = useState({
    name: "",
    number: "",
  });
  const changehandler = (key, value) => {
    return setUserContact((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input
          value={userContact.name}
          type="text"
          placeholder="Type your Name"
          onChange={(e) => changehandler("name", e.target)}
        />
        <label>Number</label>
        <input
          value={userContact.name}
          type="number"
          placeholder="Type your Number"
          onChange={(e) => changehandler("number", e.target)}
        />
      </div>
      <button>Click</button>
    </form>
  );
};

export default UserForm;
