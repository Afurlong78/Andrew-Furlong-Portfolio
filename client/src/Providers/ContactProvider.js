import React, { useState, useContext } from "react";
import axios from "axios";

const ContactContext = React.createContext();

export const useContactContext = () => {
  return useContext(ContactContext);
};

export function ContactProvider({ children }) {
  //request link
  const contact_url =
    "https://portfolio-railway-production-1a0f.up.railway.app/api/contact";

  //contact state
  const [email, setEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  //loading state
  const [loading, setLoading] = useState(false);

  //success state
  const [success, setSuccess] = useState(false);

  //error state
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const closeHandler = (e) => {
    e.preventDefault();

    setSuccess(false);
  };

  //contact function
  const contactHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(contact_url, {
        email: email,
        subject: contactSubject,
        message: contactMessage,
      })
      .then((response) => {
        // console.log(response);
        setSuccess(true);
        setLoading(false);
        setEmailError("");
        setSubjectError("");
        setMessageError("");
      })
      .catch((error) => {
        console.log(error.response.data, "error");
        setSuccess(false);
        setLoading(false);

        if (error.response.data.includes("email")) {
          setEmailError(error.response.data);
          setSubjectError("");
          setMessageError("");
        } else if (error.response.data.includes("subject")) {
          setSubjectError(error.response.data);
          setMessageError("");
          setEmailError("");
        } else if (error.response.data.includes("message")) {
          setMessageError(error.response.data);
          setEmailError("");
          setSubjectError("");
        }
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
    loading,
    setLoading,
    emailError,
    subjectError,
    messageError,
  };

  return (
    <ContactContext.Provider value={contact_state}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;
