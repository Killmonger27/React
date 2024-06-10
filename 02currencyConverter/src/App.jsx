import { useEffect, useState } from 'react'
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('eur')
  
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  console.log(`options =>  ${ options}`)

  const convert = (e) => {

    console.log(from)
    console.log(to)
    e.preventDefault()
    setConvertedAmount(amount * currencyInfo[to])
  }
  
  // useEffect(() =>{ 
  //   setConvertedAmount(0)
  //   setAmount(0)

  // },[from,to])

  /*
    le bloc commente plus haut sert just a reinitialiser les montant lorsqu'on change de devise mais je pense 
    que c'est pas pertinent de l'ajouter
  */

  return (
    <div className=' w-full bg-cover bg-no-repeat bg-center h-screen flex flex-wrap justify-center items-center' style={{backgroundImage: `url("https://img.freepik.com/vecteurs-libre/arriere-plan-signe-monnaie-numerique-lumineux-espace-texte_1017-52412.jpg?t=st=1717941290~exp=1717944890~hmac=dc611217d71e6071992ba83df0d8f5880398533e238f10d63d95e4b737e3aabe&w=900")`}}>

      <form onSubmit={convert} className='w-full flex flex-col gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 shadow-lg rounded-lg p-3 sm:w-1/2' >

        <InputBox 
          label="From" 
          amount={amount} 
          amountDisabled = {false} 
          selectedcurrency={from} 
          currencyDisabled={false} 
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          options={options} />

          <InputBox 
          label="To" 
          amount={convertedAmount} 
          amountDisabled = {false} 
          selectedcurrency={to}
          currencyDisabled={false}
          onAmountChange={setConvertedAmount}
          onCurrencyChange={setTo}
          options={options} />

          <button type='submit' className='w-full transition ease-in-out delay-150 bg-blue-500 hover:translate-x-1 hover:bg-indigo-500 duration-300 rounded-lg text-white text-xl '>Convert</button>

      </form>

    </div>
  )
}

export default App

/*
  ** Coded By Kill_m0nger27 **
*/