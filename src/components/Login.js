import React from 'react'
import './Login.css'

const Login = ({type, password}) => {

  const btn=() =>{
    alert('Form is Submitted')
  }

  return (
    <div className='login-wrapper'>
      <form className='form-wrapper'>
        <label>LOGIN FORM</label>
        <input type= 'text' value={type} placeholder ='Enter your name' ></input>
        <input type='password' value={password} placeholder='Enter your password' ></input>
        <button onClick={btn}>Submit</button>
        {/* <h1>
          Hello {type} {password}
        </h1> */}
      </form>
    </div>
  )
}

export default Login





























// const Greet = props => {
//   retrun (
//     <div>
//       <h2>
//         hello {props.name} {props.userName}

//       </h2>
//     </div>
//   )
// }

