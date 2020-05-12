import React, { useContext } from "react";
import FormDetails from "./FormDetails";
import { FormContext } from "../contexts/FormContext";

const FormList = () => {
  const { forms } = useContext(FormContext);
  return forms.length ? (
    <div className="formlist">
      <ul>
        {forms.map((form) => {
          return <FormDetails form={form} key={form.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      No hay datos en este momento nos vemos en la proxima
    </div>
  );
};

export default FormList;
