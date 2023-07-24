import React, { useState } from "react"
import AgregarTareasFragment from "./fragments/AgregarTareaFragment"
import MostrarTareasFragment from "./fragments/MostrarTareasFragment"

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
                <AgregarTareasFragment 
                    nombreTarea={nombreTarea}
                    handlerTomarTarea={handlerTomarTarea}
                    handlerbotonAgregarTarea={handlerbotonAgregarTarea}
                />
                <MostrarTareasFragment tareas={tareas} handlerEliminarTarea={handlerEliminarTarea}/>
            </div>
        </>
    )
}

export default Tareas
