import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import UseAxiosPublic from '../hooks/UseAxiosPublic';
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProviders = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState()
    const axiosPublic = UseAxiosPublic()
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    facebookProvider.addScope('public_profile');


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const facebookSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("currentUser", currentUser)

            if (currentUser) {
                const userInfo = { email: currentUser?.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res?.data?.token) {
                            localStorage.setItem('access-token', res?.data?.token)
                            setLoading(false)
                        }
                    })
            } else {
                localStorage.removeItem('access-token')
                setLoading(false)
            }
        })

        return () => {
            return unsubscribe()
        }

    }, [axiosPublic])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        facebookSingIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;