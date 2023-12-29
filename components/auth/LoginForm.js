"use client"
import { useState } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';

const LoginForm = () => {
    const { registerUser, loginUser, googleLogin } = useAuthContext()
    const [values, setValues] = useState({
        email: '',
        password: '',
        role: 'user' //dejo hardcodeado el valor user, asi la unica manera de tener un usuario admin seria mediante cambio en la DB
    });

    const [viewMode, setViewMode] = useState('login');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (viewMode === 'login') {
      loginUser(values);
    } else if (viewMode === 'register') {
      registerUser(values);
    }
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">
        {viewMode === 'login' ? 'Iniciar sesión' : 'Registrarse'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Correo electrónico</label>
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
          <label className="block text-sm font-medium text-gray-600">Contraseña</label>
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
            type="button"
            onClick={() => {viewMode === 'register' ? setViewMode('login') : loginUser(values)}}
            className={`${
              viewMode === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
            } p-2 rounded-md hover:bg-blue-600 mr-3`}
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            onClick={() => {viewMode === 'login' ? setViewMode('register') : registerUser(values)}}
            className={`${
              viewMode === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'
            } p-2 rounded-md hover:bg-blue-600 mr-3`}
          >
            Registrarse
          </button>
          <button
            onClick={() => googleLogin()}
            className="bg-red-400 text-white p-2 rounded-md hover:bg-red-500 ml-3"
          >
            Ingresar con Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
