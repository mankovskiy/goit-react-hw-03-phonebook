import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            handleDeleteContact={handleDeleteContact}
          />
        );
      })}
    </ul>
  );
};
