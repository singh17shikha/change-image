import React from 'react';
import { FaTwitter,FaGoogle, FaApple } from 'react-icons/fa';


import './SignUp.css';
function SignsUp(){
  
    
    return(
        <div>
            <h1> <FaTwitter color="blue"/></h1>
            <h1 style={{color:'black'}}>Join Twitter Today</h1>
            <button className="button-1">
        <FaGoogle />
        Sign up with Google
      </button><br></br><br></br>
      <button className="button-2">
        <FaApple />
        Sign up with Apple
      </button>
      <h3 style={{color:'black'}}>or</h3>
      <button className="button-3" >
        
        Create Account
      </button>
      <h5>By signing up, you agree to the <span style={{color:'blue'}}>Terms of Service</span> and <span style={{color:'blue'}}>Privacy Policy</span>, including <span style={{color:'blue'}}>Cookie Use</span>.</h5>
       <h4 className="log">Have an account already? <span style={{color:'blue'}}><a href=".com">Log in</a></span></h4>     
            </div>
    );
  }

    export default SignsUp;