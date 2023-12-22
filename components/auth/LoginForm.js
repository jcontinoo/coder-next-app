"use client"
import { useState } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';

const LoginForm = () => {
    const { registerUser, loginUser, googleLogin } = useAuthContext()
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el inicio de sesión
        console.log('Iniciar sesión con:', values.email, values.password);
        // También puedes utilizar una función de autenticación, por ejemplo, de Firebase.
    };

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={() => loginUser(values)}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mr-11"
                    >
                        Iniciar sesión
                    </button>
                    <button
                        onClick={() => registerUser(values)}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Registrarse
                    </button>
                    <button 
                    onClick={() => googleLogin()}
                    className="bg-red-400 text-white  p-2 rounded-md hover:bg-red-500 ml-3"
                    >
                        Ingrear con Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
