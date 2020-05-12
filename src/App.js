import React from "react";
import "./App.css";
import Form from "./components/Forms";
import FormContextProvider from "./contexts/FormContext";
import FormList from "./components/FormList";

function App() {
  return (
    <div>
      <FormContextProvider />
      <FormList />
      <Form />
      <FormContextProvider />
    </div>
  );
}

export default App;
