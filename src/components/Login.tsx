import { useEffect, useReducer } from 'react'

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: { nombre: string, username: string } }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return{
                validando: false,
                token: null,
                nombre: '',
                username: '',
            }
        break;
        case 'login':
            const { nombre, username } = action.payload;
            return{
                validando: false,
                token: 'ABCDE123',
                nombre,
                username,
            }
        break;
        default:
            return state;
            break;
    }
}

export const Login = () => {

    const [{ validando, token, username }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
      setTimeout(() => {
        dispatch({ type: 'logout'})
      }, 1500)
    }, [])

    const login = () => {
        dispatch({
            type: 'login', 
            payload: {
                nombre: 'Alexis', 
                username: 'Dracon151',
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }
        
    if(validando){
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            {
                (token) ?
                <div className="alert alert-success">
                    Autenticado como : { username }
                </div> 
                :
                <div className="alert alert-danger">
                    No autenticado
                </div>
            
            }

            {
                (token) ? 
                <button 
                    className="btn btn-danger"
                    onClick={ logout }
                >
                    Logout
                </button>
                :
                <button 
                    className="btn btn-primary"
                    onClick={ login }
                >
                    Login
                </button>

            }

        </>
    )
}
