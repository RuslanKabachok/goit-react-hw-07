import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contactsOps';

function App() {
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <h1>Loading contacts</h1>}
        {error && <h1>Error!</h1>}
        <ContactList />
      </div>
    </>
  );
}

export default App;
