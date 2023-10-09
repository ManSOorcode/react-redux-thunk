/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const UserData = ({ contacts }) => {
  //   const deletHandler = (e) => {
  //     console.log(e.target.value);
  //   };
  return (
    <>
      <Link to=".." relative="path">
        to form
      </Link>

      {contacts.map((contact, i) => (
        <div key={i}>
          <div>{contact.name}</div>
          <div>{contact.number}</div>
          <button>Delete</button>
        </div>
      ))}
    </>
  );
};

export default UserData;
