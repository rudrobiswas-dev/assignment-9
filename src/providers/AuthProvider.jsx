"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

import app
  from "@/services/firebase.config";

import {

  getAuth,

  onAuthStateChanged,

  signInWithEmailAndPassword,

  createUserWithEmailAndPassword,

  signOut,

} from "firebase/auth";

export const AuthContext =
  createContext();

const auth =
  getAuth(app);

const AuthProvider =
  ({ children }) => {

    const [user, setUser] =
      useState(null);

    const [loading, setLoading] =
      useState(true);

    // register
    const createUser =
      (email, password) => {

        return createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      };

    // login
    const loginUser =
      (email, password) => {

        return signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      };

    // logout
    const logoutUser =
      () => {

        return signOut(auth);
      };

    // observer
    useEffect(() => {

      const unsubscribe =
        onAuthStateChanged(
          auth,
          (currentUser) => {

            setUser(currentUser);

            setLoading(false);
          }
        );

      return () => unsubscribe();

    }, []);

    const authInfo = {

      user,

      loading,

      createUser,

      loginUser,

      logoutUser,

    };

    return (

      <AuthContext.Provider
        value={authInfo}
      >

        {children}

      </AuthContext.Provider>
    );
  };

export default AuthProvider;