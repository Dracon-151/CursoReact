import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

	const [form, setForm] = useState({
		username: '',
		email: ''
	})

	const onInput = ({target}) => {
		let {name, value} = target;
		setForm({
			...form,
			[name]: value
		})
	}

	useEffect(()=>{
		console.log('ola')
	}, [])

	useEffect(()=>{
		console.log('form')
	}, [form])

	useEffect(()=>{
		console.log('email')
	}, [form.email])

	return (
		<>
			<h1>Formulario</h1>
			<hr />

			<input 
				type="text" 
				className="form-control"
				placeholder="Username"
				name="username" 
				value={ form.username }
				onChange={onInput}
			/>
			<input 
				type="email" 
				className="form-control mt-3"
				placeholder="Email"
				name="email" 
				value={ form.email }
				onChange={onInput}
			/>

			{
				form.username === 'Dracon-151' &&
				<Message/>
			}
		</>
	)
}
