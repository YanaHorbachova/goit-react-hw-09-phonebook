import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import { phonebookOperations } from "../redux/phonebook";
import { getIsLoading } from "../redux/phonebook/phonebook-selectors";

export default function PhonebookView() {
  const dispatch = useDispatch();

useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

    return (
      <div className="form-wrapper">
        <div className="form-view">
          <ContactForm />
          <Filter />
          <ContactList />
        </div>
      </div>
    );
  }
}

