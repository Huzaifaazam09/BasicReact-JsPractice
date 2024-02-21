import React, { useState } from 'react'

function StateUse() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "mustang",
        year: "1992",
        color: "red"
    });

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "Orange" }
        });
    }
    return (
        <div>
            <h1>My {car.brand}</h1>
            <p>It is {car.color} {car.model} from {car.year}</p>

            <button type='button' onClick={updateColor}>Orange</button>
        </div>
    )
}

export default StateUse