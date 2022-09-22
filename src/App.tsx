import React from 'react';
import logo from './dice.svg';
import './App.css';
import RollADice from './roll-a-dice/RollADice';

function App() {
  // localStorage.setItem("diceResults", JSON.stringify([]));
  return (
    <div className="App">
      <RollADice />
    </div>
  );
}

export default App;
