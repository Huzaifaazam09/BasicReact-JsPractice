import React from 'react'
import { useState } from 'react'

function FormHandling() {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");

    function getFormData(e) {
        console.warn(name, tnc, interest)
        e.preventDefault()
    }
    return (
        <div>
            <h2>React Form Handling</h2>
            <form onSubmit={getFormData}>
                <input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} /> <br></br>
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>Front-end Dev</option>
                    <option>Back-end Dev</option>
                    <option>Full Stack Dev</option>
                </select>
                <br></br>
                <input type="checkbox" onChange={(e) => setTnc(e.target.value)} /> <span>Accept Terms and Conditions</span>
                <br></br>
                <button type="submit">submit</button>

            </form>
        </div>
    )
}

export default FormHandling