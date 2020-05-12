import React, { Fragment, useState, useContext } from "react";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import { FormContext } from "../contexts/FormContext";
import { Button } from "@material-ui/core";

const Form = () => {
  const { dispatch } = useContext(FormContext);
  const [val, setVal] = useState("");
  const [selects, setSelects] = useState("");
  const [tr, setTr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "addForm", form: { val, selects, tr } });
    setVal("");
    setSelects("");
    setTr("");
  };

  return (
    <div class="container-fluid h-100 bg-light text-dark">
      <div class="row justify-content-center align-items-center">
        <h1 class="h1">Información</h1>
      </div>
      <hr />
      <div class="row justify-content-center align-items-center h-100">
        <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label>valor</label>
              <br></br>
              <CurrencyTextField
                name="valor"
                id="valor"
                value="val"
                placeholder="Ingrese el valor a definir"
                class="form-control"
                currencySymbol=""
                decimalCharacter=","
                digitGroupSeparator="."
                onChange={(e) => setVal(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label>Seleccione una descripción</label>
              <select
                name="seleccion"
                id="select"
                value="selects"
                class="form-control"
                onChange={(e) => setSelects(e.target.value)}
                required
              >
                <option selected value="Seleccione">
                  Seleccione
                </option>
                <option id="desc001" value="descripcion 01">
                  Descripción #1
                </option>
                <option id="desc002" value="descripcion 02">
                  Descripción #2
                </option>
                <option id="desc003" value="descripcion 03">
                  Descripción #3
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>TRM</label>
              <br></br>
              <CurrencyTextField
                name="trm"
                id="trm"
                value="tr"
                placeholder="Ingrese el valor a definir"
                class="form-control"
                currencySymbol=""
                decimalCharacter=","
                digitGroupSeparator="."
                onChange={(e) => setTr(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <button class="col-8 btn btn-warning btn-sm float-left">
                      Limpiar
                    </button>
                  </div>
                  <div class="col">
                    <Button
                      type="submit"
                      value="addForm"
                      class="col-8 btn btn-primary btn-sm float-right"
                    >
                      Guardar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
