import React from 'react'
import { useForm } from '../hooks/useForm'

export const Formularios = () => {

    const { email, password, onChange} = useForm({
        email: '',
        password: ''
    });

    return (
        <>
            <h3>Formularios</h3>
            <input
                type='text'
                className='form-control my-1'
                placeholder='Email'
                value={email}
                onChange={(event) => onChange(event.target.value, 'email')}
            >
            </input>
            <input
                type='password'
                className='form-control my-1'
                placeholder='Password'
                value={password}
                onChange={(event) => onChange(event.target.value, 'password')}
            >
            </input>
        </>
    )
}
