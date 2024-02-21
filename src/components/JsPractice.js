import React from 'react'

function JsPractice() {
    // const cars = ["Saab","volvo","Revo"];
    // console.log(cars)


    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let size = fruits.length;
    // console.log(size)

    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.push("lemon", "Grapes ")  
    // console.log(fruits)


    // const cars = [
    //     {
    //         name: "Benz",
    //         cname: "Mercedes"
    //     },
    //     {
    //         name: "GLI",
    //         cname: "Toyota"
    //     }
    // ]
    // console.log(cars[1]['cname'])  


    function myFunction (a1 , a2){
        return a1 && a2 ;
    }
    let result = myFunction(' ' , 10);
    console.log(result)

    // const numbers = [45, 4, 9, 16, 25];
    // const over18 = numbers.filter(myFunction);

    // function myFunction(value) {
    //     return value > 18;  
    // }
    // console.log(over18)

    //     let day;
    //     switch (new Date().getDay()) {
    //         case 0:
    //         day = "Sunday";
    //         break;
    //         case 1:
    //         day = "Monday";
    //         break;
    //         case 2:
    //         day = "Tuesday";
    //         break;
    //         case 3:
    //         day = "Wednesday";
    //         break;
    //         case 4:
    //         day = "Thursday";
    //         break;
    //         case 5:
    //         day = "Friday";
    //         break;
    //         case 6:
    //         day = "Saturday";
    //         break;
    //     }
    // console.log(day)

    // let bay = 2 ;
    // let dayName;

    // switch (bay) {
    // case 1:
    //     dayName = 'Monday';
    //     break;
    // case 2:
    //     dayName = 'Tuesday';
    //     break;
    // case 3:
    //     dayName = 'Wednesday';
    //     break;
    // case 4:
    //     dayName = 'Thursday';
    //     break;
    // case 5:
    //     dayName = 'Friday';
    //     break;
    // default:
    //     dayName = 'Weekend';
    // }
    // console.log(dayName);

    // let text = "";
    // for (let i = 0; i < 7; i++) {
    //     text += "The number is " + i + "<br>";
    //     console.log(text);  
    //   }

    // for (let i = 0; i < 5; i++) {
    //     console.log(i); 
    //   }

    // let count = 0;
    // while (count < 5) {
    //     console.log(count); 
    //     count++;
    // }

    // function add() {
    //     let counter = 0;
    //     function plus() {counter += 3;}
    //     plus();  
    //     return counter; 
    // }
    // console.log(add())
  
    // //  Arrow Fnction
    //    let hello = (a , b) => a * b ;
    //     console.log(hello(3 , 4))
    
    

    return (
        <div>
            <h2>Visit Console.log</h2>
        </div>
    )
}

export default JsPractice