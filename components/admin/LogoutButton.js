"use client"
import { useAuthContext } from "@/contexts/AuthContext"

const LogoutButton = () => {
    const { logoutUser } = useAuthContext()

    return (
        <button onClick={logoutUser} className="bg-red-500 text-white px-4 py-2 rounded-md">Cerrar Sesion</button>
    )
}

export default LogoutButton