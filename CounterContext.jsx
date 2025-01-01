// Task 3: send simple counter data from countercontext.jsx to simplecounter.jsx
import React, { createContext, useState } from 'react'
import SimpleCounter from '../task/SimpleCounter'

// 1st step create contextapi
export let CounterApi = createContext()

const CounterContext = () => {

let [counter,setCounter] = useState(0)

 
let increment = ()=>{
    setCounter(counter+1)
}


let decrement = ()=>{
    if (counter > 0){
    setCounter(counter-1)
    }
}

let reset = ()=>{
    setCounter(0)
}

// 2nd step wrap consumer(where we sending data) in provider. provider present in context api component
  return (
    <CounterApi.Provider value={{counter,increment,decrement,reset}}>
 <SimpleCounter/>
    </CounterApi.Provider>
  )
}

export default CounterContext