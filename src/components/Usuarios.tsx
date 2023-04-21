import React from 'react'
import { User } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    const { usuarios, pagAnterior, pagSiguiente } = useUsuarios();

    const renderUser = (usuario : User) => {
        return (
            <tr key={usuario.id.toString()}>
                <td>
                    <img 
                        src={usuario.avatar} 
                        style={{
                            width: 50,
                            borderRadius: 100,
                        }}
                    />
                </td>
                <td>{usuario.first_name} {usuario.last_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )

    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario) => {
                            return renderUser(usuario)
                        })
                    }
                </tbody>
            </table>

            <button
                className='btn btn-success'
                onClick={pagAnterior}
            >
                Anterior
            </button>
            <button
                className='btn btn-success'
                onClick={pagSiguiente}
            >
                Siguiente
            </button>
        </>
    )
}
