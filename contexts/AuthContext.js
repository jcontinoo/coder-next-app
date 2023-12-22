"use client"
import { auth, provider } from "@/firebase/config"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithPopup
} from "firebase/auth"
import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null,
        role: "admin"
    })

    const registerUser = async (values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const logoutUser = async () => {
        await signOut(auth)

    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            console.log(user)

            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
                })

            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={{ user, registerUser, loginUser, logoutUser, googleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}