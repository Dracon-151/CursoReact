import { useState } from "react"

export const useForm = (initialForm) => {
    
	const [form, setForm] = useState(initialForm)

	const onInputChange = ({target}) => {
		let {name, value} = target;
		setForm({
			...form,
			[name]: value
		})
	}

    const cleanForm = () => {
        setForm(initialForm)
    }

    return {
        form,
        onInputChange,
        cleanForm,
    }
}
