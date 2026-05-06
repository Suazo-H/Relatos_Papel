import {useContext, useState} from 'react';
import {AuthContext} from '../context/auth/authContext.jsx';
import {useNavigate} from 'react-router-dom';
import {mockUsers} from "../data/mockUsers.js";

export function useLogin(){
    const [error, setError] = useState("");
    const {setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    {/*Función para manejar inicio de sesión*/}
    const handleLogin = async (username, password) => {
        setError("");

        if(!username.trim() || !password.trim()){
            setError("Usuario y contraseña son obligatorios");
            return {exito: false};
        }

        try{
            await new Promise(resolve => setTimeout(resolve, 1000));

            const usuario = mockUsers.find(user => user.username === username && user.password === password);

            if(usuario){
                setUser(usuario);
                return {exito: true};
            }else{
                setError("Usuario o contraseña incorrectos");
                return {exito: false};
            }

        }catch(e){
            setError("Error. Intente nuevamente:" + e.message)
            return {exito: false};
        }
    }

    {/*Cerrar sesión*/}
    const logout = () => {
        setTimeout(() => {
            setUser(null);
            navigate("/");
        }, 1000)
    };

    return {handleLogin, error, logout, clearError: () => setError("")};
}