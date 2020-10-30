import React from 'react'
import './App.css';
import { Counter } from './Components/Counter';
import { CounterDisplay } from './Components/CounterDisplay';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <CounterDisplay></CounterDisplay>
    </div>
  );
}

export default App;
