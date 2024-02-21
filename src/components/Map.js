import './Map.css'
import React from 'react'

const data = [
  { id: 1, label: "First Name", type: 'text', placeholder: 'Enter your first name' },
  { id: 2, label: "Last Name", type: 'text', placeholder: 'Enter your last name' },
  { id: 3, label: "Email Address", type: 'text', placeholder: 'Enter your email address' },
  { id: 4, label: "Password", type: 'password', placeholder: 'Enter your password' },
];

export default function Map() {
  return (
    <div className="main-wrapper">
    <form className="form-Wrapper">
      {data.map((d) => (
        <div className="field-wrapper">
          <label>{d.label}</label>
          <input type={d.type} placeholder={d.placeholder}></input>
        </div>
      ))}
    </form>
  </div>
  )
}
