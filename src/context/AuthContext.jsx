/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from "../firebase/Firebase"
import { onAuthStateChanged } from 'firebase/auth';


export const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, initializeUser)
      return unsubscribe;
  }, [])

  async function  initializeUser(user) {
    if (user) {
        setCurrentUser({...user });
        setUserLoggedIn(true);
    } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
    }
    setLoading(false);
    
  }

  const value = {
    currentUser,
    userLoggedIn,
    loading
  }
  

  return (
    <AuthContext.Provider value={ value }>
      {!loading && children}
    </AuthContext.Provider>
  );
};





