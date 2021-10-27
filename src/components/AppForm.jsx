import React, { useState } from "react";

const AppForm = () => {
  const [patient, setPatient] = useState({
    NHC: 1,
    name: null,
    age: null,
    weightHeight: null,
    yearsSmoking: null,
    hasDiet: false,
    type: null,
    isSmoking: false
  });

  const handleInputChange = (ev) => {
    let value= ev.target.value
    if (value == "false"){
      value= false
    }
    if (value == "true"){
      value= true
    }

    setPatient({
      ...patient,
      [ev.target.name]: value
    })
  };
  console.log(patient);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary m-5"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Registrar pacientes
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Registrar pacientes
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    Numero de historia clínica
                  </label>
                  <input
                    name='NHC'
                    type="number"
                    className="form-control"
                    placeholder="Ingrese su número de historia clinica"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    Nombre
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    Edad
                  </label>
                  <input
                    name='age'
                    type="number"
                    className="form-control"
                    placeholder="Ingrese su edad"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label for=" weightHeight" className="form-label">Relación peso y altura</label>
                  <select id="weightHeight" className="form-select" name='weightHeight' onChange={handleInputChange}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="form-control">
              <label>¿Es fumador?</label>
              <br />
              <div className="form-check">
                <input className="form-check-input" type="radio" name='isSmoking' onChange={handleInputChange} value={true}/>
                <label className="form-check-label" for="isSmoking">
                  Si
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="isSmoking" onChange={handleInputChange} value={false}/>
                <label className="form-check-label" for="isSmoking">
                  No
                </label>
              </div>
            </div>
            <div className="form-control">
              <label>¿Tiene dieta?</label>
              <br />
              <div className="form-check">
                <input className="form-check-input" type="radio" name='hasDiet' onChange={handleInputChange} value={true}/>
                <label className="form-check-label" for="hasDiet">
                  Si
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="hasDiet" onChange={handleInputChange} value={false}/>
                <label className="form-check-label" for="hasDiet">
                  No
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppForm;