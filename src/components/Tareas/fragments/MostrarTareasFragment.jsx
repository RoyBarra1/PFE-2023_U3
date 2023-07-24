import React, {useState} from "react";

const MostrarTareasFragment =({tareas,handlerEliminarTarea})=>{
 
    return (
        <>
            <div className="col-12 mt-4">
            <h2>Lista de tareas</h2>
            </div>
            <div className="clo-12">
                <ul className="list-group">
                    {
                        tareas.map(tarea =>{

                            return (
                                <>
                                       
                                    <li className="list-group-item" key={tarea.id}>
                                        {tarea.nombre}
                                        <button type="button" 
                                            className="btn btn-outline-danger btn-sm ms-2" 
                                            onClick={()=>handlerEliminarTarea(tarea.id)}>Eliminar</button>
                                    </li>
                                            
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default MostrarTareasFragment