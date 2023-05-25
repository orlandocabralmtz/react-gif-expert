import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => { // esta funcion viene de GifExpertApp.jsx y se obtiene mediante props


    const [inputValue, setInputValue] = useState('')


    //** esta parte obtiene el valor del input y lo guarda en setinputValue. */
    //** Este valor de obtiene de event.target.value (del input) */
    const onInputChange = ({ target }) => { //destructuring de target
        setInputValue(target.value)
    }


    //** Esta función se ejecuta para enviar la información que hay en el input */
    const onSubmit = (event) => {
        event.preventDefault();
        const newValue = inputValue.trim();
        if (newValue.length <= 1) return; //hace la validación y si no se cumple no se ejecuta la función

        onNewCategory(newValue); // se ejecuta la función que viene de GifExpertApp.jsx y se envia el valor del input
        setInputValue('');
    }



    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange} // ** esta parte obtiene el valor del input y lo guarda en setinputValue. 
            />
        </form>
    )
}
export default AddCategory