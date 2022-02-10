import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  
} from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  //State for store user Data
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  //REGISTER WITH EMAIL END PASSWORD

  const registerUser = ( email, password, name,location, navigate) =>{
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const destination = location?.state?.from || '/'
    navigate(destination)
    setError("");
    
    
    const newUser = {email, displayName:name}
     //console.log(newUser);
    setUser(newUser)

    //SEND NAME IN THE FIREBASE
    updateProfile(auth.currentUser, {
     displayName:name
   }).then(() => {
     
   }).catch((error) => {
     
   });
   
  })
  .catch((error) => {
    setError(error.message);
  })
  .finally(() => setIsLoading(false));
  }

  //lOGIN WITW EMAIL AND PASSWORD COUSTM 
  const loginWithOwnEmaiAndPass  = (email, password, location, navigate) =>{
   
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/'
      navigate(destination)
    setError('');
  })
  .catch((error) => {
    setError(error.message);
  })
  .finally(() => setIsLoading(false));
  }

  // GOOGLE PROVIDER LOGIN
  const loginWithGoogle = (location, navigate) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
       
        const destination = location?.state?.from || '/'
        navigate(destination)
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //LOG OUT USER METHOD
  const userLogOut = () =>{
    setIsLoading(true)
    signOut(auth)
    .then(() => {
      
    }).catch((error) => {
      setError(error.message)
    })
    .finally(() => setIsLoading(false));
  }

  //OBSERVER USER STATE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);


  return {
    user,
    loginWithGoogle,
    userLogOut,
    registerUser,
    isLoading,
    error,
    loginWithOwnEmaiAndPass
  };
};
export default useFirebase;