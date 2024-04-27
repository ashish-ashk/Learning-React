import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  //let counter=5

  const addValue = () => {
    //counter=counter+1;
    if(counter==20)
    return
    setCounter((prevCounter) => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }

  const subValue = () => {
    if(counter==0)
    return
    setCounter(counter-1)
  }

  return (
    <>
       <h1>Chai aur React</h1>
       <h2>Couner Value: {counter}</h2>

       <button onClick={addValue}>Add value</button>
       <br/>
       <button onClick={subValue}>Decrease value</button>
       <p>footer: {counter}</p>
    </>
  )
}

export default App
