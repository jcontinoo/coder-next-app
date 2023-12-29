"use client"
import { auth, provider, app } from "@/firebase/config"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithPopup
} from "firebase/auth"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

const firestore = getFirestore(app)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        logged: false,
        email: null,
        uid: null,
        role: null
    })

    const getRole = async (uid) => {
        const docRef = doc(firestore, `usuarios/${uid}`)
        const encryptedDoc = await getDoc(docRef)

        const userRoleInfo = encryptedDoc.data().role

        return userRoleInfo
    }

    const setUserWithData = (firebaseUser) => {
        getRole(firebaseUser.uid).then((role) => {
            setUserData({
                logged: true,
                email: firebaseUser.email,
                uid: firebaseUser.uid,
                role: role
            })
        })
    }

    const registerUser = async (values) => {
        const infoUser = await createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userInfo => { return userInfo }))

        const docRef = doc(firestore, `usuarios/${infoUser.user.uid}`)
        setDoc(docRef, {email: values.email, role: values.role})
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
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserWithData(user)
            } else {
                setUserData({
                    logged: false,
                    email: null,
                    uid: null,
                    role: null
                })
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <AuthContext.Provider value={{ userData, registerUser, loginUser, logoutUser, googleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}