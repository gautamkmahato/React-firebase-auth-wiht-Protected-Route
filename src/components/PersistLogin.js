import { async } from '@firebase/util'
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import React, { Children, useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import auth from '../configs/firebaseConfig'
import { userAuthContext } from '../context/userAuthContext'
import Home from './Home'
import Login from './Login'

const PersistLogin = ({children}) => {

    const [isLoading, setisLoading] = useState(true);
    const {user} = useContext(userAuthContext);

    useEffect(() => {
        auth.onAuthStateChanged((user) =>{
            if(!user){
                return <Navigate to="/login" />
            }
            
        })
    }, []);

    useEffect(() => {
      console.log(isLoading);
    }, [isLoading])
    
    
    return children;
}

export default PersistLogin