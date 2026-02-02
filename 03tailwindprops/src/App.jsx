import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

let myObj = {
  username: "rahul",
  age:21
}
let newArr=[1,2,3]

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-4xl font-bold text-blue-600'>hello</h1>
     <Card username="chaiaurcode" btnText='click me' />
     <Card username="rahul" btnText='visit me '/>
    </>
  )
}

export default App
