import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contactsSlice';
import filterReducer from '../redux/filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});
