import React, {useState} from "react";

const AgregarTareasFragment =({nombreTarea,handlerTomarTarea,handlerbotonAgregarTarea})=>{
 
    return (
        <>
            <div className="col-12">
                <h1>
                    ToDoList
                </h1>
                </div>
                <div className="col_12">
                    <label htmlFor="nombre-tarea">añadir nueva tarea </label>
                    <input type="text" 
                        onChange={handlerTomarTarea} 
                        className="form-control my-2" 
                        id="nombre-tarea" 
                        value={nombreTarea}
                    />
                    <button type="button"
                        className="btn btn-primary" 
                        onClick={handlerbotonAgregarTarea}>Añadir tarea</button>
            </div>
        </>
    )
}
export default AgregarTareasFragment