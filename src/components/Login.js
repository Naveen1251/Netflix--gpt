import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const[errorMessage,setErorMessage] = useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);


  const handleButtonClick = ()=>{
    if(isSignInForm){
      const message = checkValidData(email.current.value,password.current.value)
      setErorMessage(message)
    }else{
      const message = checkValidData(email.current.value,password.current.value,name.current.value)
      setErorMessage(message)
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
            src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo"
          />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 w-3/12 bg-black/70  my-36 mx-auto right-0 left-0 text-white '>
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