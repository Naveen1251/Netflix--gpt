import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const[errorMessage,setErorMessage] = useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const disaptch = useDispatch()
 

  const handleButtonClick = ()=>{
    if(isSignInForm){
      const message = checkValidData(email.current.value,password.current.value)
      setErorMessage(message)
      if(message) return ;

      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
           
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErorMessage(errorCode + "-" + errorMessage)
        });


    }else{
     
      const message = checkValidData(email.current.value,password.current.value,name.current.value)
      setErorMessage(message)
     
      if(message) return ;

      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
        
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL:USER_AVATAR
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            disaptch(addUser({
             uid:uid,
             email:email,
             displayName:displayName,
             photoURL:photoURL
            }));
            
            
          }).catch((error) => {
            setErorMessage(error.message)
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErorMessage(errorCode + "-" + errorMessage)
          // ..
        });
    }
    
  }


  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
    setErorMessage(null);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img
            src={BG_URL}
            alt="logo"
            className='h-screen object-cover'
          />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 w-full md:w-3/12 bg-black/70  my-36 mx-auto right-0 left-0 text-white '>
        <h1 className='font-bold text-2xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-inherit border border-white/95'/>)}
        <input  ref = {email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-inherit border border-white/95'/>
        <input ref={password} type='password' placeholder='password' className='p-4 my-4 w-full bg-inherit border border-white/95'/>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now!"}</p> 
      </form>
    </div>
  )
}

export default Login