//   Simple One input field react form

// import React, { useState } from 'react'

// function ReactForm() {
//     const [name , setName] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`The name you entered was: ${name}`)
//     }

//   return (
//     <form onSubmit={handleSubmit}>
//         <label>
//             Enter Your Name:
//             <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
//         </label>
//         <input type='submit'/>
//     </form>
//   )
// }

// export default ReactForm


// Multiple input Field

import React, { useState } from 'react'

function ReactForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter Your Name:
                <input type='text'
                    name='username'
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>

            <label>
                Enter Your Age:
                <input type='number'
                    name='age'
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type='submit' />
        </form>
    )
}

export default ReactForm



// Simple React Dropdown list. In React, the selected value is defined with a value attribute on the select tag:

// import React, { useState } from 'react'

// function ReactForm() {
//     const [myCar , setMyCar] = useState("Volvo");

//     const handleChange = (event) => {
//         setMyCar(event.target.value)
//     }
//   return (
//     <form>
//         <select value={myCar} onChange={handleChange}>
//             <option value="Volvo">Volvo</option>
//             <option value="Ford">Ford</option>
//             <option value="Bmw">Bmw</option>
//             <option value="Corolla">Corolla</option>
//         </select>
//     </form>
//   )
// }

// export default ReactForm