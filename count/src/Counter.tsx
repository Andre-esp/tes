import React from 'react';
import ReactDOM from 'react-dom';
import counterStore from './store/store';
import { observer } from 'mobx-react-lite';

import './index.css';

const Counter = observer(() => {
  const { plus, minus, startTimer, stopTimer, time } = counterStore;

  return (
    <div className="container">
      <div>
        <button onClick={() => plus()}>plus</button>
        {counterStore.counter}
        <button onClick={() => minus()}>minus</button>
      </div>
      <div>
        <button onClick={() => startTimer()}>pusk timer</button>
        <span>{time}</span>
        <button onClick={() => stopTimer()}>stop timer</button>
      </div>
    </div>
  );
});

export default Counter;
