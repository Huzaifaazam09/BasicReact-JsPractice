import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Map from './components/Map'
import Login from './components/Login'
import FunctionClick from './components/FunctionClick'
import ConditionalRendering from './components/ConditionalRendering'
import ListRendering from './components/ListRendering'
import FormHandling from './components/FormHandling'
import FormValidation from './components/FormValidation'
import JsPractice from './components/JsPractice'
import UsState from './components/hooks/UsState'
import UsEffect from './components/hooks/UsEffect'
import ReactPractice from './components/ReactPractice'
import ReactForm from './components/ReactForm'
import Layout from './components/Layout'
import StateUse from './components/hooks/StateUse'
import EffectUse from './components/hooks/EffectUse'
import GetDataFetching from './components/GetDataFetching'
import PostDataFetching from './components/PostDataFetching'
import Promises from './components/Promises'
import ReducerUseCounterOne from './components/hooks/ReducerUseCounterOne'
import ReducerUseCounterTwo from './components/hooks/ReducerUseCounterTwo'
import ReducerUseCounterThree from './components/hooks/ReducerUseCounterThree'
import DataFetchingUseReducer from './components/hooks/DataFetchingUseReducer'
import MemoUse from './components/hooks/MemoUse'
import RefUse from './components/hooks/RefUse'
import RefUseTwo from './components/hooks/RefUseTwo'


// import CompC from './components/context/CompC'
// Following two LINE ARE PART OF REACT CONTEXT HOOK
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route exact path='/' Component={Map} />  
          <Route exact path='/login' Component={Login} />
          <Route path='/formhandling' Component={FormHandling} />
          <Route path='/formvalidation' Component={FormValidation} />
          <Route path='/functionclick' Component={FunctionClick} />
          <Route path='/conditionalrendering' Component={ConditionalRendering} />
          <Route path='/listrendering' Component={ListRendering} />
          <Route path='/jspractice' Component={JsPractice} />
          <Route path='/reactpractice' Component={ReactPractice} />
          <Route path='/useffect' Component={UsEffect} />
          <Route path='/usstate' Component={UsState} />
          <Route path='/reactform' Component={ReactForm} />
          <Route path='/stateuse' Component={StateUse} />
          <Route path='/effectuse' Component={EffectUse} />
          <Route path='/GetDataFetching' Component={GetDataFetching} />
          <Route path='/PostDataFetching' Component={PostDataFetching} />
          <Route path='/Promises' Component={Promises} />
          <Route path='/ReducerUseCounterOne' Component={ReducerUseCounterOne} />
          <Route path='/ReducerUseCounterTwo' Component={ReducerUseCounterTwo} />
          <Route path='/ReducerUseCounterThree' Component={ReducerUseCounterThree} />
          <Route path='/DataFetchingUseReducer' Component={DataFetchingUseReducer} />
          <Route path='/MemoUse' Component={MemoUse} />
          <Route path='/RefUse' Component={RefUse} />
          <Route path='/RefUseTwo' Component={RefUseTwo} />
         

        </Route>

        {/* <Map/> */}
        {/* <Login type="hassan" password="1122" />
      <Login type="umair" password="2233" />
      <Login type="ali" password="3344" />
      <Login type="usman" password="4455" /> */}
        {/* <FunctionClick/> */}
        {/* <ConditionalRendering/> */}
        {/* <ListRendering/> */}
        {/* <FormHandling/> */}
        {/* <FormValidation/> */}
        {/* <JsPractice/> */}
        {/* <UsState/> */}
        {/* <UsEffect/> */}
        {/* <ReactPractice/> */}
        {/* <ReactForm/> */}
        {/* <StateUse/> */}
        {/* <EffectUse/> */}
        {/* <DataFetching/> */}
        {/* <Promises/> */}
        {/* <ReducerUseCounterOne/> */}
        {/* <ReducerUseCounterTwo/> */}
        {/* <ReducerUseCounterThree/> */}
        {/* <DataFetchingUseReducer/> */}
        {/* <MemoUse/> */}
        {/* <RefUse/> */}
        {/* <RefUseTwo/> */}

      </Routes>
    </BrowserRouter>


    // FOR REACT CONTEXT HOOK Following LINES AND LINE 28, 29
    //    <>
    //    <UserContext.Provider value={"Huzaifa"}> 
    //    <ChannelContext.Provider value={"Azam"}>
    //          <CompC/>
    //    </ChannelContext.Provider>
    //    </UserContext.Provider>
    // </>
  )
}

