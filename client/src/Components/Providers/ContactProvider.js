import React, { useState, useContext } from "react";
import axios from "axios";

const ContactContext = React.createContext();

export const useContactContext = () => {
  return useContext(ContactContext);
};

export function ContactProvider({ children }) {
  //request link
  const contact_url = "http://localhost:5000/api/contact";

  //contact state
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  //success state
  const [success, setSuccess] = useState(false);

  //error state
  const [error, setError] = useState(false);

  const closeHandler = (e) => {
    e.preventDefault();

    setSuccess(false);
  };

  //contact function
  const contactHandler = async (e) => {
    e.preventDefault();

    axios
      .post(contact_url, {
        email: email,
        subject: contactSubject,
        message: contactMessage,
      })
      .then((response) => {
        console.log(response);
        setSuccess(true);
        setError(false);
      })
      .catch((error) => {
        console.log(error, "error");
        setError(true);
        setSuccess(false);
      });
    setEmail("");
    setContactSubject("");
    setContactMessage("");
  };

  const contact_state = {
    success,
    closeHandler,
    contactHandler,
    email,
    setEmail,
    contactMessage,
    setContactMessage,
    contactSubject,
    setContactSubject,
  };

  return (
    <ContactContext.Provider value={contact_state}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;
