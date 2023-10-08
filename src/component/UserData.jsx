const UserData = ({ contacts }) => {
  return contacts.map((contact, i) => (
    <div key={i}>
      <div>{contact.name}</div>
      <div>{contact.number}</div>
    </div>
  ));
};

export default UserData;
