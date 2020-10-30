
import './App.css';
import { Counter } from './components/Counter';
import { CounterDisplay } from './components/CounterDisplay';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <CounterDisplay></CounterDisplay>
    </div>
  );
}

export default App;
