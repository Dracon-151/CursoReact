import { useState } from "react"

export const AddCategory = ({onNewValue}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => setInputValue(target.value)

    const onSendValue = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <2) return;

        onNewValue(inputValue.trim())
        setInputValue('');
    }

    return(
        <form onSubmit={onSendValue}>
            <input 
                type="text" 
                className="form-control"
                placeholder="Buscar"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>   
    )
}