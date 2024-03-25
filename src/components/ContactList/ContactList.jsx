import { useSelector } from 'react-redux';
import css from '../ContactList/ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact info={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
