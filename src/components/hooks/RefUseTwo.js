
import { useState, useEffect, useRef } from "react";
function RefUseTwo() {
      const [inputValue, setInputValue] = useState("");
      const count = useRef(0);

      useEffect(() => {
            count.current = count.current + 1;
            console.log(count.current)
          });
        
          return (
                <>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <h1>Render Count: {count.current}</h1>
                </>
              );
            }
 export default RefUseTwo

















// import React, { useEffect, useRef, useState } from 'react'

// function RefUseTwo() {

//     const [timer, setTimer] = useState(0)
//     const intervalRef = useRef()

//     useEffect(() =>{
//         intervalRef.current = setInterval(() =>{
//             setTimer(prevTimer => prevTimer + 1)
//         }, 1000)
//         return () => {
//             clearInterval(intervalRef.current)
//         }
//     }, [])
//     console.log(intervalRef.current)

//   return (
//     <div> 
//         Hook Timer: {timer}
//         <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
//     </div>
//   )
// }
// export default RefUseTwo


