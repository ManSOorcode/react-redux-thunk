const UserData = ({ contacts }) => {
  return contacts.map((contact) => (
    <div key={contact.id}>
      <div>{contact.name}</div>
      <div>{contact.number}</div>
    </div>
  ));
};

export default UserData;
