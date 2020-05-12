import React, { createContext, useReducer, useEffect } from "react";
import { FormReducer } from "../reducers/FormReducer";

export const FormContext = createContext();

const FormContextProvider = (props) => {
  const [forms, dispatch] = useReducer(FormReducer, [], () => {
    const localData = localStorage.getItem("forms");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("forms", JSON.stringify(forms));
  }, [forms]);
  return (
    <FormContext.Provider value={(forms, dispatch)}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
