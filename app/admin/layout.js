"use client"
import { useAuthContext } from "@/contexts/AuthContext"

const AdminLayout = ({ children, login }) => {
    const { userData } = useAuthContext()

    console.log("que rol trae el user? ", userData)

    return (
        <>
            {
                userData.logged && userData.role === 'admin'  ? children : login
            }
        </>
    )
}

export default AdminLayout