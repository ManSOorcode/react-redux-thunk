/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserData } from "../store/action";

const UserData = ({ contacts }) => {
  const dispacth = useDispatch();
  const deleteHandler = (id) => {
    dispacth(deleteUserData(id));
  };
  return (
    <>
      <Link to="/form" relative="path">
        to form
      </Link>

      {contacts.map((contact, i) => (
        <div key={i}>
          <div>{contact.name}</div>
          <div>{contact.number}</div>
          <button onClick={() => deleteHandler(contact.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default UserData;
