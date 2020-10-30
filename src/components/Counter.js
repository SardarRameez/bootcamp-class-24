import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'

export const Counter = () => {
    const dispatch=useDispatch()
    const counter=useSelector((state)=>{return state.counter.count})
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <div>
                <button onClick={()=>{dispatch(increment())}} style={{width:"50px"}}>+</button>
                <button onClick={()=>{dispatch(decrement())}} style={{width:"50px"}}>-</button>
            </div>
        </div>
    )
}
