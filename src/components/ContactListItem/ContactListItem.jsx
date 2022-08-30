export function ContactListItem({ id, name, number, handleDeleteContact }) {
  return (
    <li>
      <p>name:{name} </p>
      <p>number:{number} </p>
      <button onClick={() => handleDeleteContact(id)}>delete</button>
    </li>
  );
}
