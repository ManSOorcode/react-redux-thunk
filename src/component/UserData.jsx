/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserData, editeFailure } from "../store/action";

const UserData = () => {
  const { result, isLoading, error } = useSelector((state) => state.universal);
  const dispacth = useDispatch();
  const deleteHandler = (id) => {
    dispacth(deleteUserData(id));
  };
  const editHandler = (data) => {
    dispacth(editeFailure(data));
  };

  console.log(result);
  return (
    <>
      <Link to="/form" relative="path">
        to form
      </Link>
      {isLoading && <p>loading user data ...</p>}
      {error && <p>{error}</p>}
      {result.map((contact, i) => (
        <div key={i}>
          <div>{contact.name}</div>
          <div>{contact.number}</div>
          <button onClick={() => editHandler(contact)}>Edit</button>
          <button onClick={() => deleteHandler(contact.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default UserData;
