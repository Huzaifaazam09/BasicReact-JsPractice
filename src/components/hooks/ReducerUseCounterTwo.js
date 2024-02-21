import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0 ,
    secondCounter : 10
}
const reducer = (state , action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
        return { ...state, firstCounter: state.firstCounter - action.value }

        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }    
        case 'reset':
            return initialState    
        default:
            return state
    }
}

function ReducerUseCounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState) 
  return (
    <div>
        <div> First Counter : {count.firstCounter}</div> <br/>
        <button onClick={() => dispatch({type: 'increment' , value: 1})}>
            Increment
        </button>
        <button onClick={() => dispatch({type: 'decrement' , value: 1})}>
            Decrement
        </button>

        <button onClick={() => dispatch({type: 'increment' , value: 10})}>
            Increment 10
        </button>
        <button onClick={() => dispatch({type: 'decrement' , value: 10})}>
            Decrement 10 
        </button> 
            
        <div> Second Counter : {count.secondCounter}</div> <br/>
        <div> 
        <button onClick={() => dispatch({type: 'increment2' , value: 1})}>
            Increment Counter
        </button>
        <button onClick={() => dispatch({type: 'decrement2' , value: 1})}>
            Decrement Counter
        </button>
        </div>

        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerUseCounterTwo