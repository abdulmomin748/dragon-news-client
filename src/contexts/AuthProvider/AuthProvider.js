import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth ,onAuthStateChanged,sendEmailVerification,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const authContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const providerLogin = provider => {
        return signInWithPopup(auth, provider)
    }


    const logOut = () => {
        setLoading(true)
       return signOut(auth);
        
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updatePro = profile => {
        return updateProfile(auth.currentUser, profile)
    }

    // const updatePro = (name, photoURL) => {
    //     return updateProfile(auth.currentUser,{
    //         displayName: name,
    //         photoURL: photoURL,
    //     })
    // }
    
    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)

            if(currentUser === null ||  currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[]) 

    const authInfo = {
        user,
        loading,
        providerLogin,
        logOut,
        createUser,
        signIn,
        updatePro,
        emailVerify,
        setLoading
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider; 