import jwt from 'jwt-decode';
import {createContext,useContext,useEffect,useState} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token] = useState(localStorage.getItem('user'))
    const [user, setUser] = useState()

    async function fetchToken() {
        if (token) {
            setUser(jwt(token))
            localStorage.setItem('user', token)
        } else {
            localStorage.removeItem('user')
        }
    }

    useEffect(() => {
        fetchToken()
    }, [])


    return(
        <AuthContext.Provider value={{ token, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthData = () => {
    return useContext(AuthContext)
}

export default AuthProvider;