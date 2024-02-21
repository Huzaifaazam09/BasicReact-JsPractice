import React, { useEffect, useState } from 'react'

function EffectUse() {
    const [x ,setX] = useState(0)
    const [y ,setY] = useState(0)

    const logMousePosition = e =>{
        setX(e.clientX)
        setY(e.clientY)
        console.log('Mouse event')
    }

    useEffect(() =>{
        window.addEventListener('mousemove', logMousePosition)
        console.log('useEffect called')

        return() => {
        window.removeEventListener('mousemove', logMousePosition)
        console.log('component unmount code')
        }
    }, [])  
  return (
    <div>
        Hooks X- {x} Y- {y}
        
    </div>
  )
}

export default EffectUse