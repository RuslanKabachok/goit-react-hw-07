import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contactsOps';
import { selectLoading, selecError } from '../../redux/contactsSlice';

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selecError);

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
