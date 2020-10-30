import React from 'react'
import { useSelector } from 'react-redux'

export const CounterDisplay = () => {
    const counter=useSelector((state)=>{return state.counter})
    return (
        <div>
            <h3>Value of counter from Counter Display {counter}</h3>
        </div>
    )
}
