import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useSelector } from 'react-redux';

function App() {
  const loading = useSelector((state) => state.contacts.loading);

  const error = useSelector((state) => state.contacts.error);

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
