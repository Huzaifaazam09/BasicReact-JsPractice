import React from 'react'
import axios from 'axios'

function Promises() {

    // Basic Example of Promises and its syntax 
    const promise = new Promise((resolve, reject) => {
        const name = "ali"
        if (name == "ali") {
            resolve(name)
        } else {
            reject("The name was not ali, it is : " + name)
        }
    });

    promise.then((name) => {
        console.log(name);
    })

        .catch((err) => {
            console.log(err)
        });


    // Fetching Data from Api with the help of Axios library via PROMISES
    const data = axios.get("https://jsonplaceholder.typicode.com/posts");

    data.then((res) => {
        console.log(res.data)
    })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            console.log("Task Finished!")
        })


    // Fetching Data from Api via Async/await
    const fetchData = async () => {
        try{  
            const shata = await axios.get("https://jsonplaceholder.typicode.com/todos");
            console.log(shata);
        } catch (err) {
            console.log(err);
        } finally{
            console.log("Hellow!")
        }
    };

    fetchData();

    return (
        <div>
            <h2>Visit Console log for PROMISES IN JS</h2>
        </div>
    )
}

export default Promises