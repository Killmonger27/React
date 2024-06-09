import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]  = useState("olive") 

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl border">

          <button onClick={() => setColor("red")} className="rounded-full shadow-lg px-4 py-2 mx-2 border" style={{backgroundColor:'red'}}>Red</button>

          <button onClick={() => setColor("green")}     className="rounded-full shadow-lg px-4 py-2 mx-2 border"
            style={{backgroundColor:'green'}} >Green</button>

          <button onClick={() => setColor("blue")}  className="rounded-full shadow-lg px-4 py-2 mx-2 border "
            style={{backgroundColor:'blue'}}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
