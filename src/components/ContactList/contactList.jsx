import Contact from 'components/Contact/Contact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from 'redux/contactsOperations';
import { selectFilteredContacts } from 'redux/selectors';
// import { selectContacts, selectFilter, selectFilteredContacts } from 'redux/selectors';
import { ContactContainer } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);

  // const filteredContacts = (filter, contacts) => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const showContacts = filteredContacts(filter, contacts);

  return (
    <ContactContainer>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactContainer>
  );
};
export default ContactList;
