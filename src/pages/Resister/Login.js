import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../useAuth/useAuth';

const Login = () => {
 const {user,setUser,signinWithGoogle,signOuttemp}=useAuth()
    const emailRef=useRef();
    const passwordRef=useRef();
     
     const handelResisterForm=e=>{
         e.preventDefault();
    
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        console.log(email,password);
 
 
        
 
     }
     const handelGoogleSingIn=()=>{
        signinWithGoogle()
        .then((result) => {
          
            const user = result.user;
            setUser(user)
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            console.log(errorCode);
          });
     }
     return (
         <div className='resister'>
             <h1>welcome to our tutor home  login here </h1>
             <form  onSubmit={handelResisterForm} >
              
                 <input type="email" placeholder='Enter your Email' ref={emailRef} />
                 <input type="password" placeholder='Enter your Password' ref={passwordRef} />
                 <input type="submit" value="Sign in" />
             </form>
     <div className='bbutton'>
     <button className='button' onClick={handelGoogleSingIn}> Sign in with Google</button>
             <button className='button' onClick={signOuttemp}> Sign Out</button> <br />
             if new user pleace register here? <Link to="/logOut">Register</Link>
     </div>
    
             {user.email}
           
         </div>
     );
 
};

export default Login;