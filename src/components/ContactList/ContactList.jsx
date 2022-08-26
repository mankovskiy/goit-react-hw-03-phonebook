export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>name:{contact.name} </p>
            <p>number:{contact.number} </p>
          </li>
        );
      })}
    </ul>
  );
};
