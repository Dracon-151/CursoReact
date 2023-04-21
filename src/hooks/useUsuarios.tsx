import { useState, useRef, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ResReqUserList, User } from '../interfaces/reqRes';

export const useUsuarios = () => {
    
    const [usuarios, setUsuarios] = useState<User[]>([]);

    useEffect(() => {
        cargarUsuarios();
    }, [])

    const page = useRef(0)

    const cargarUsuarios = async (direction : number = 1) => {

        direction = (page.current + direction < 1) ? 0 : direction;

        const res = await reqResApi.get<ResReqUserList>('/users', {
            params: {
                page: page.current + direction
            }
        })

        if(res.data.data.length > 0){
            setUsuarios(res.data.data)
            page.current += direction; 
        }
        else{
            alert('No hay más registros')
        }
    }

    const pagSiguiente = () => {
        cargarUsuarios(1)
    }
    const pagAnterior = () => {
        cargarUsuarios(-1)
    }

    return {
        usuarios,
        pagSiguiente,
        pagAnterior,
    }
}
