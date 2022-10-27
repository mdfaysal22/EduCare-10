import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';


const auth = getAuth(app)
export const authUser = createContext()
const AuthContexts = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState({});

    // Email And Password SignUp System...
    const emailSignup = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName:name,
        })
    }

    // Email And Password Login system...
    const emailSignIn = (email, password) => {
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

    // 
    const signOutSystem = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {user, emailSignup,signOutSystem, updateUser, emailSignIn, googleSignUp, githubSignUp};
    return (
        <authUser.Provider value={authInfo}>
            {children}
        </authUser.Provider>
    );
};

export default AuthContexts;