import React, { useState } from 'react'

function FormValidation() {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);

    function loginHandle (e){
        if(user.length<3 || password.length<3)
        {
            alert("Type Correct Values")
        }
        else
        {
            alert("All Good")
        }
        e.preventDefault()
    }

    function userHandle(e){
        let item=e.target.value;
        if(item.length<3)
        {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
        setUser(item)
        
    }


    function passwordHandle(e){
        let item=e.target.value;
        if(item.length<3)
        {
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
        setPassword(item)
        
    }
  return (
    <div>
        <h2>FormValidation</h2>
        <form onSubmit={loginHandle}>
            <input type='text' placeholder='Enter Your Name' onChange={userHandle}/>{userErr?<span>User Not Valid</span>:""}
            <br/> <br/>
            <input type='text' placeholder='Enter Your Passcode' onChange={passwordHandle}/>{passErr?<span>Password Not Valid</span>:""}          
            <br/> <br/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default FormValidation