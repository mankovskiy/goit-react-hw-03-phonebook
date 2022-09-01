import { DeleteBtn } from './ContactListItem.styled';

export function ContactListItem({ id, name, number, handleDeleteContact }) {
  return (
    <li>
      <p>name:{name} </p>
      <p>number:{number} </p>
      <DeleteBtn onClick={() => handleDeleteContact(id)}>delete</DeleteBtn>
    </li>
  );
}
