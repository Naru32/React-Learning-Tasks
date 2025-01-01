import React, { useContext, useState} from 'react'
import Style from "./counter.module.css"
import {CounterApi} from '../context/CounterContext'


 const SimpleCounter = () => { 

   let data = useContext(CounterApi)
   console.log(data);
 let {counter,increment,decrement,reset} = data

    return (
    <>
    <h1 id={Style.Heading}>Welcome to SimpleCounter</h1>
    <div id={Style.count}>{counter}</div>
    <div className={Style.buttons}>
<button id={Style.inc} onClick={increment}>+</button>
<button id={Style.dec} onClick={decrement}>-</button>
<button id={Style.res} onClick={reset}>Reset</button>
    </div> 
    
    </>
  )
}

export default SimpleCounter