import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from './components/styled/buttons'
import { DropDown, TextInput } from './components/styled/inputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Component Library</h1>
      <div className="card">
        <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
        <br />
        <Button
          bgColor="blue"
          textColor='white' 
          text='Primary' 
          onClick={() => alert("Primary Clicked")} 
        />
        <Button
          bgColor="white"
          textColor='blue'
          text='Secondary' 
          onClick={() => alert("Secondary Clicked")} 
        />
        <Button
          bgColor="red"
          textColor='white'
          text='Cancel' 
          onClick={() => alert("Primary Cancel Clicked")} 
        />
        <Button
          bgColor="white"
          textColor='red'
          text='Cancel' 
          onClick={() => alert("Secondary Cancel Clicked")} 
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <br />
      <TextInput />
      <br />
      <DropDown />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
