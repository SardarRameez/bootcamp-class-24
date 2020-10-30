import React from 'react'
import { useSelector } from 'react-redux'

export const CounterDisplay = () => {
    const counter=useSelector((state)=>{return state.counter.count})
    return (
        <div>
            <h3>Counter value form Counter Display: {counter}</h3>
        </div>
    )
}
