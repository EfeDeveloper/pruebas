import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const FormDetails = ({ form }) => {
  const { dispatch } = useContext(FormContext);
  return (
    <li onClick={() => dispatch({ type: "removeForm", id: form.id })}>
      <div className="val">{form.val}</div>
      <div className="selects">{form.selects}</div>
      <div className="tr">{form.tr}</div>
    </li>
  );
};

export default FormDetails;
