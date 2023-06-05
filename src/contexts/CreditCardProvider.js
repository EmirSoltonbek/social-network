import React, { createContext, useContext, useState } from "react";
export const creditCardContext = createContext();
export const useCreditCard = () => useContext(creditCardContext);

const CreditCardProvider = ({ children }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [submit, setSubmit] = useState({ name, number, date, cvc });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(submit);
  }
  const values = {
    number,
    date,
    name,
    cvc,
    focus,

    setNumber,
    setName,
    setDate,
    setCvc,
    setFocus,

    handleSubmit,
  };
  return (
    <creditCardContext.Provider value={values}>
      {children}
    </creditCardContext.Provider>
  );
};

export default CreditCardProvider;
