import React, { useState } from "react"

const ListaTareas = [
    {
        id : 1,
        nombre : "alimentar a los leones"
    },
    {
        id : 2,
        nombre :"jugar con las quimeras"
    },
    {
        id : 3,
        nombre : "mimir"
    }
]   
const Tareas = () => {

    const [tareas , setTareas] = useState(ListaTareas)
    const [nombreTarea, setNombreTarea] = useState('')

    const handlerTomarTarea = (e) => {
        setNombreTarea(e.target.value)
    }

    const handlerbotonAgregarTarea = (e) => {
       
        if (nombreTarea === '') {

            alert('Debes escribir el nombre de una tarea')
        }else{
            let tareanueva = {
                id: tareas.length +1,
                nombre: nombreTarea
            }
            setTareas([...tareas, tareanueva])
            setNombreTarea('')
        }
       

    }

    const handlerEliminarTarea = (id) => {
        let filtro = tareas.filter(tarea => {
            return tarea.id !== id})
        setTareas(filtro)
    }

    return (
        <>
            <div className="row">
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
            </div>
        </>
    )
}

export default Tareas
