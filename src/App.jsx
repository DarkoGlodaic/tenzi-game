export default App

import { useState } from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'

function App() {
  const [diceValue, setDiceValue] = useState(generateAllNewDice());
  const diceElements = diceValue.map(dieObj => (
    <Die value={dieObj.value} key={dieObj.id} isHeld={dieObj.isHeld}/>)
  )

  const rollDice = () => {
    setDiceValue(prevDice => {
      // const newDice = [...prevDice]
      return generateAllNewDice()
    })
  }

  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>

      <button className="roll-dice" onClick={rollDice}>Roll!</button>
    </main>
  )
}

// Generates 10 random numbers between 1 and 6
function generateAllNewDice() {
  return Array.from({length: 10}, () => ({
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid()
  }));
}


