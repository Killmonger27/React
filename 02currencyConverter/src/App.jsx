import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('eur')

  

  return (
    
    <div className=' w-full bg-cover bg-no-repeat bg-center h-screen flex flex-wrap justify-center items-center' style={{backgroundImage: `url("https://img.freepik.com/vecteurs-libre/arriere-plan-signe-monnaie-numerique-lumineux-espace-texte_1017-52412.jpg?t=st=1717941290~exp=1717944890~hmac=dc611217d71e6071992ba83df0d8f5880398533e238f10d63d95e4b737e3aabe&w=900")`}}>

    </div>
  )
}

export default App
