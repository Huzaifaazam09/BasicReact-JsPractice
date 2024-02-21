import React from 'react'
import ListRend2 from './ListRend2'


function ListRendering() {

    const data = [
        { id: 1, name: "Ali", age: 20, skill: 'React developer' },
        { id: 2, name: "Usman", age: 25, skill: 'Angular developer' },
        { id: 3, name: "Omer", age: 22, skill: 'Vue developer' },
    ]

    const personList = data.map(person => <ListRend2 key={person.id} person={person} />)

    return (
        <div>{personList}</div>
    )
}

export default ListRendering 