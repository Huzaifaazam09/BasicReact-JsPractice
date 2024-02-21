import React, { useState } from 'react'

// react maps
const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

function ReactPractice() {
    const listItems = products.map(d =>
        <li key={d.id}
            style={{
                color: d.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {d.title + " " + "OKAYYYY"}
        </li>
    );
    console.log(listItems);
    console.log(products);


    //  react useState Hook
    let [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    // react events
    function Football() {
        //  msg = 'take the shot'
        
        const  msg = '123'
        const shoot = a => alert(a);
        
        const info = (
            <button onClick={() => shoot("Goal")}>{msg}</button>
            );
            
            
            console.log(msg)
            return(info);
        }

    // react props , passing data from one component to other
    function Car(props) {
        return <h3> {props.brand}! </h3>;
    }

    function Garage() {
        return (
            <>
                <h2>Who lives in my garage?</h2>
                <Car brand="BMW" />
            </>
        );
    }

    // Passing Variable instead of String
    function Car2(props) {
        return <h3> {props.brand}! </h3>;
    }

    function Garage2() {
        const carName = "Ford";
        return (
            <>
                <h2>Who lives in my garage?</h2>
                <Car2 brand={carName} />
            </>
        );
    }

    // Passing Object instead of Variable 
    function Car3(props) {
        return <h3> {props.brand.id}! </h3>;
    }

    function Garage3() {
        const carName = { name: "Ford", model: "Mustang", id: 1122 };
        return (
            <>
                <h2>Who lives in my garage?</h2>
                <Car3 brand={carName} />
            </>
        );
    }

    // react Condition
    function GoalScored() {
        return <h3>Vamos! Huzi scored the winning Golazo</h3>
    }

    function GoalMissed() {
        return <h3>Oh no! Ronaldo missed an important Goal</h3>
    }

    function Goal(props) {
        const isGoal = props.isGoal;
        if (isGoal) {
            return <GoalScored />
        }
        return <GoalMissed />
    }

    // react ternary Condition
    function GoalScored2() {
        return <h3>Vamos! Huzi scored the winning Golazo</h3>;
    }

    function GoalMissed2() {
        return <h3>Oh no! Ronaldo missed an important Goal</h3>;
    }

    function Goal2(props) {
        const isGoal2 = props.isGoal2;
        return (
            <>
                {isGoal2 ? <GoalScored2 /> : <GoalMissed2 />}
            </>
        )
    }

    // map function
    const numbers = [1, 2, 3, 4, 5];
    const doubledNumbers = numbers.map(number => number * 2);
    console.log(doubledNumbers);

    // Difference btwn the two is with Map we can create a new array by iterating over each element whereas in forEach loop the array will be same but the element can be changed by iterating 

    // forEach loop
    const numbers2 = [1, 2, 3, 4, 5];
    numbers2.forEach((number) => {
        console.log(number * 2)
    });

    // react Props by passing keys and render multiple values
    function Car5(props) {
        return <li>I am a {props.brand}</li>;
    }

    function Garage5() {
        const cars55 = [
            { id: 1, brand: 'Ford' },
            { id: 2, brand: 'BMW' },
            { id: 3, brand: 'Audi' }
        ];
        return (
            <>
                <h1>Who lives in my garage?</h1>
                <ul>
                    {cars55.map((car) => <Car5 key={car.id} brand={car.brand} />)}
                </ul>
            </>
        );
    }


    return (
        <div>
            <ul>
                {listItems}
            </ul>

            <button onClick={handleClick} >
                Clicked {count} times
            </button>

            <Football />

            <Garage />

            <Garage2 />

            <Garage3 />

            <Garage5 />

            <Goal isGoal={false} />

            <Goal2 isGoal2={true} />

        </div>
    )
}

export default ReactPractice