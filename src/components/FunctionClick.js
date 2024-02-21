import React from 'react'

function FunctionClick() {
    function clickHandler() {
            alert('Button is Clicked')
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick