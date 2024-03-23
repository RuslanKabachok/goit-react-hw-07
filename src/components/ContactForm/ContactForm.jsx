import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from '../ContactForm/ContactForm.module.css';

function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    const contact = { id: nanoid(), name: values.name, number: values.number };
    dispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field
          className={css.field}
          type="text"
          id={nameId}
          name="name"
        ></Field>
        <ErrorMessage className={css.message} name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field
          className={css.field}
          type="text"
          id={numberId}
          name="number"
        ></Field>
        <ErrorMessage className={css.message} name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
