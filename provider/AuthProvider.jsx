import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext } from 'react';



const auth = getAuth(app);


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user , setUser ] = useState(null)
    const [loader, setLoader] = useState(true)



        const createUser = (email, password) =>{
            setLoader(true)
           return createUserWithEmailAndPassword(auth, email, password)
        }

        const loginUser = (email, password)=>{
            setLoader(true)
            return signInWithEmailAndPassword(auth, email, password)
        }
        const logout= ()=>{
            setLoader(true)
           return signOut(auth)
        }

        const googleSignup =(provider)=>{
            
            return signInWithPopup(auth, provider)
        }
        const githubSignup = (provider)=>{
            return signInWithPopup(auth, provider)
        }
        
      

        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (loggeduser)=>{
                setUser(loggeduser)
                setLoader(false)
            });
            return () =>{
                return unsubscribe()
            }
        },[])

        const updateUserData = (name,pURL) =>{
            return updateProfile (auth.currentUser,{
                displayName: name,
                photoURL: pURL
               
            })}

    const authInfo = {
     createUser,
     loginUser,
     logout,
     user,
     googleSignup,
     loader,
     githubSignup,
     updateUserData,
    
     
    }
    return (    
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>

    );
};

export default AuthProvider;