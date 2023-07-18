import { useState } from "react";

const EstadosInicio = () => {
    const [conteo, setConteo] = useState(0)
    const handleConteoClick = (evento) => {  
        setConteo(conteo + 1)  
    }

    return (
        <>
            <h1>Ejemplo de estado de conteo, total contabilizado: {conteo}</h1>
            <button type="button" onClick={handleConteoClick}>Aumentar conteo</button>
        </>
    )
}
export default EstadosInicio