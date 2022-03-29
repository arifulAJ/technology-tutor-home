import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import {  useEffect, useState } from "react";
import initializeAuthentic from "../../useFirbase/firebase.initiali";


const GoogleProvider = new GoogleAuthProvider();

initializeAuthentic()
const useAuth=()=>{
    const [user,setUser]=useState({})
    const auth = getAuth();
  const signinWithGoogle=()=>{
      return signInWithPopup(auth, GoogleProvider)
  }
   
  const creatPassword=(email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginWithWmail=(email,password)=>{
  return  signInWithEmailAndPassword(auth, email, password)
  }
  const updateName=(name)=>{
    updateProfile(auth.currentUser, {
      displayName: name
    })
    .then(() => {
      // Profile updated!
      const newUser={...user ,displayName:name};
      setUser(newUser);
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
          // ...
        } else {
          setUser({})
          
        }
       
       
      });
      return ()=>unsubscribe();
     },[])

   const signOuttemp=()=>{
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});}
    return{
        user,
        setUser,
        signinWithGoogle,
        signOuttemp,
        creatPassword,
        updateName,
        loginWithWmail

    }
      }

export default useAuth;