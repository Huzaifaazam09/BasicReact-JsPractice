import React from 'react'
import { Outlet , Link } from 'react-router-dom'

function Layout() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">Form via Map function</Link>
            </li>
            <li>
                <Link to="/functionclick">FunctionClick</Link>
            </li>
            <li>
                <Link to="/conditionalrendering">ConditionalRendering</Link>
            </li>
            <li>
                <Link to="/formhandling">FormHandling</Link>
            </li>
            <li>
                <Link to="/formvalidation">FormValidation</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/jspractice">JsPractice</Link>
            </li>
            <li>
                <Link to="/listrendering">ListRendering</Link>
            </li>
            <li>
                <Link to="/useffect">Useffect</Link>
            </li>
            <li>
                <Link to="/usstate">UsState</Link>
            <li>
                <Link to="/reactpractice">ReactPractice</Link>
            </li>
            </li>
            <li>
                <Link to="/reactform">ReactForm</Link>
            </li>
            <li>
                <Link to="/stateuse">StateUse</Link>
            </li>
            <li>
                <Link to="/effectuse">EffectUse</Link>
            </li>
            <li>
                <Link to="/GetDataFetching">GETDataFetching With Useffect Hook</Link>
            </li>
            <li>
                <Link to="/PostDataFetching">POSTDataFetching With Useffect Hook</Link>
            </li>
            <li>
                <Link to="/Promises">Promises</Link>
            </li>
            <li>
                <Link to="/ReducerUseCounterOne">ReducerUseCounterOne</Link>
            </li>
            <li>
                <Link to="/ReducerUseCounterTwo">ReducerUseCounterTwo</Link>
            </li>
            <li>
                <Link to="/ReducerUseCounterThree">ReducerUseCounterThree</Link>
            </li>
            <li>
                <Link to="/DataFetchingUseReducer">DataFetching With UseReducer Hook</Link>
            </li>
            <li>
                <Link to="/MemoUse">MemoUse</Link>
            </li>
            <li>
                <Link to="/RefUse">RefUse</Link>
            </li>
            <li>
                <Link to="/RefUseTwo">RefUseTwo</Link>
            </li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Layout


// // inline CSS
// <h3 style={{backgroundColor:"red"}}>add style</h3>

// // inline CSS by creating object and passing the values
// const myStyle = {
//     color : "red",
//     backgroundColor: "blue",
//     padding :  "10px"
// };

// <h2 style={myStyle}>helo</h2>