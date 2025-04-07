import { useState } from 'react'
import './App.css'

export default App
import Die from './components/Die'

function App() {
  const [diceValue, setDiceValue] = useState(generateAllNewDice());
  const diceElements = diceValue.map(num => <Die value={num}/>)
  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>
    </main>
  )
}

// Generates 10 random numbers between 1 and 6
function generateAllNewDice() {
  return Array.from({length: 10}, () => Math.ceil(Math.random() * 6));
}


