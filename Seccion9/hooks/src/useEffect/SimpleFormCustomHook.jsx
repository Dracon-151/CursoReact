import { useForm } from "../hooks/useForm"

export const SimpleFormCustomHook = () => {

	const { form, onInputChange, cleanForm } = useForm({
		username: '',
		email: '',
		password: '', 
	})

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
				onChange={onInputChange}
			/>
			<input 
				type="email" 
				className="form-control mt-3"
				placeholder="Email"
				name="email" 
				value={ form.email }
				onChange={onInputChange}
			/>
			<input 
				type="password" 
				className="form-control mt-3"
				placeholder="Password"
				name="password" 
				value={ form.password }
				onChange={onInputChange}
			/>
			<button className="btn btn-danger w-25 mt-2"
				onClick={cleanForm}
			>
				Reset
			</button>
		</>
	)
}
