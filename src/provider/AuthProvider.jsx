import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config'
import useAxiosPublic from '../hooks/useAxiosPublic'


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic()

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const logInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
        })
    }

    const googleLogIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log('current user',currentUser)
            if(currentUser){
                    // get token and store client
                    const userInfo = {email:currentUser.email}
                    axiosPublic.post('/jwt',userInfo)
                    .then(res=>{
                        if(res.data.token){
                            localStorage.setItem('access-token',res.data.token)
                            setLoading(false)
                        }
                    })
                    

            }else{
                // Todo: Remove Token (if token stored in client side: Localstorage,caching,in memory)
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            
        })

        return ()=>{
            unsubscribe()
        }
    },[axiosPublic])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        logInUser,
        logOutUser,
        updateUserProfile,
        googleLogIn
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
