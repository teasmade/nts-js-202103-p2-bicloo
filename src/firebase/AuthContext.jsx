/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react';
import UserService from '../Services/UserService';
import { auth } from './Firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUpWithEmail(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function signInWithEmail(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signOut() {
    UserService.logOut();
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log('sign out success');
      })
      .catch((error) => {
        console.error('error on signOut user (firebase)', error);
        // An error happened.
      });
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUpWithEmail,
    signInWithEmail,
    signOut,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
