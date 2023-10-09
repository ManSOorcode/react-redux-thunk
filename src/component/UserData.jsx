const UserData = ({ contacts }) => {
  //   const deletHandler = (e) => {
  //     console.log(e.target.value);
  //   };
  return contacts.map((contact, i) => (
    <div key={i}>
      <div>{contact.name}</div>
      <div>{contact.number}</div>
      <button>Delete</button>
    </div>
  ));
};

export default UserData;
