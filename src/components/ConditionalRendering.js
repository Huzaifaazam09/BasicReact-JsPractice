import React, { useState } from 'react'

function ConditionalRendering() {

  const [loggedIn, setLoggedIn] = useState(1);
  console.log(loggedIn)

  return (
    <div>
      {loggedIn==2? <h1>Hello</h1> : loggedIn == 3? <h1>Hey</h1> : <h1>Hii</h1>}

    </div>
  )
  
}

export default ConditionalRendering


// the problem arises that why is it showing the value of FALSE in console.log while it shows TRUE for other values ..... Why does it give different solutions when wrting one ! and two !! next to LoggedIn.