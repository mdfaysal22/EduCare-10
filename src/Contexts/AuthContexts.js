import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';


const auth = getAuth(app)
export const authUser = createContext()
const AuthContexts = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState({});

    // Email And Password SignUp System...
    const emailSignup = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName:name,
            photoURL:photo,
        })
    }

    // Email And Password Login system...
    const emailSignIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google SignUp ----
    const googleSignUp = () => {
        return signInWithPopup(auth,googleProvider)
    }

    // Github SignUp ---- 
    const githubSignUp = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    // 
    const signOutSystem = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {user,loader, emailSignup,passwordReset,signOutSystem, updateUser, emailSignIn, googleSignUp, githubSignUp};
    return (
        <authUser.Provider value={authInfo}>
            {children}
        </authUser.Provider>
    );
};

export default AuthContexts;