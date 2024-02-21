import React from 'react'

function ListRend2({person}) {
  return (
    <div>
        <h3> My name is {person.name}. I am {person.age}. I am good at {person.skill}</h3>
    </div>
  )
}

export default ListRend2