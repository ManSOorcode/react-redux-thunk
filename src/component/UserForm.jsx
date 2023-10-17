import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUserData, putUserData } from "../store/action";
import { Link, useNavigate } from "react-router-dom";

const UserForm = () => {
  const [userContact, setUserContact] = useState({
    name: "",
    number: "",
  });

  const { isEditForm, editValue, ...rest } = useSelector(
    (state) => state.universal
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(editValue);
    if (editValue.length !== 0) {
      setUserContact((prev) => ({
        ...prev,
        name: editValue.name,
        number: editValue.number,
        id: editValue.id,
      }));
    }
  }, [editValue]);

  //uniq id generator function
  function generateUniqueId() {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base36
    const randomStr = Math.random().toString(36).substr(2, 5); // Generate a random string
    return `${timestamp}-${randomStr}`;
  }

  const uniqueId = generateUniqueId();

  const changehandler = (key, value) => {
    console.log(value);
    return setUserContact((prev) => {
      return { ...prev, [key]: value, id: uniqueId };
    });
  };

  const edithandler = (key, value) => {
    return setUserContact((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const enterNameBlurHandler = () => {};

  const enterNumberBlurHandler = () => {};

  let formIsValid = false;

  if (userContact.name && userContact.number) {
    formIsValid = true;
  }

  const submitEditHandler = (e) => {
    e.preventDefault();
    console.log(userContact);
    if (userContact.name && userContact.number) {
      dispatch(putUserData(userContact));
    }

    formIsValid = false;

    setUserContact({
      name: "",
      number: "",
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (userContact.name && userContact.number) {
      dispatch(postUserData(userContact));
    }

    formIsValid = false;

    setUserContact({
      name: "",
      number: "",
    });

    // navigate("/data");
  };

  return (
    <>
      <li>
        <Link to="/">To Dashboard</Link>
      </li>
      {isEditForm && (
        <form onSubmit={submitEditHandler}>
          <div>
            <label>Name</label>
            <input
              value={userContact.name}
              type="text"
              placeholder="Type your Name"
              onChange={(e) => edithandler("name", e.target.value)}
              // onBlur={enterNameBlurHandler}
            />
            {/* {nameInputIsInvalid && (
            <p>Input Field must not be less than 2 character 'name'</p>
          )} */}
            <label>Number</label>
            <input
              value={userContact.number}
              type="number"
              placeholder="Type your Number"
              onChange={(e) => edithandler("number", e.target.value)}
              // onBlur={enterNumberBlurHandler}
            />
            {/* {numberInputIsInvalid && <p>number must be in 10 digit</p>} */}
          </div>
          <button disabled={!formIsValid}>Edit</button>
        </form>
      )}
      {!isEditForm && (
        <form onSubmit={submitHandler}>
          <div>
            <label>Name</label>
            <input
              value={userContact.name}
              type="text"
              placeholder="Type your Name"
              onChange={(e) => changehandler("name", e.target.value)}
              onBlur={enterNameBlurHandler}
            />
            {/* {nameInputIsInvalid && (
            <p>Input Field must not be less than 2 character 'name'</p>
          )} */}
            <label>Number</label>
            <input
              value={userContact.number}
              type="number"
              placeholder="Type your Number"
              onChange={(e) => changehandler("number", e.target.value)}
              onBlur={enterNumberBlurHandler}
            />
            {/* {numberInputIsInvalid && <p>number must be in 10 digit</p>} */}
          </div>
          <button disabled={!formIsValid}>Submite</button>
        </form>
      )}
    </>
  );
};

export default UserForm;
