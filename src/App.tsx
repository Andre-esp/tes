import React from 'react';
import './App.css';
import Counter from './components/counter';
import counterStore from './store/store'
import {observer} from 'mobx-react-lite'

const App = observer(() => {
  const {plus, minus, startTimer, stopTimer, time} = counterStore

  return (
    <div>
    <Counter />
    <button onClick={() => plus()}>plus</button>
    <button onClick={() => minus()}>minus</button>
    <button onClick={() => startTimer()}>pusk timer</button>
    <button onClick={() => stopTimer()}>stop timer</button>
    <span>{time}</span>
    </div>
    
  ) 
})

export default App;
