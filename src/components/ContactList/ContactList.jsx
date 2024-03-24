import { useSelector } from 'react-redux';
import css from '../ContactList/ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

function ContactList() {
  const data = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = data.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact info={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
