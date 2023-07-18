import { useState } from "react";

const Ejercicio01 =()=>{
    // constructor

    const [valor,setValor] = useState(0)
    const HadlerValor = (e) => {
        setValor(e.target.value - e.target.value * 0.19)
    } 
    return (
        // html 
        <>
            <div>
                <div>
                    <h1>
                        Calculador de valor neto
                    </h1>
                </div>
                <div>
                    <label htmlFor="inp-valor"> agrega un valor de un producto para devolver el valor neto unico</label>
                </div>
                <div>
                    <input type="number" onChange={HadlerValor} placeholder="$00000" id="inp-valor" />
                    <p>
                        El valor neto es :<strong> ${valor}</strong>
                    </p>
                </div>
                
                
            </div>

        </>
    )
}
export default Ejercicio01