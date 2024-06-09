import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [lenght,setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copyTxt, setCopyTxt] = useState("Copy")
  const pswdref = useRef(null)

  const generatePassword = useCallback(() => {
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let password = ''

    if (numberAllowed) {
      string = string + "0123456789"
    }
    if (charAllowed) {
      string = string +  "!@#$%^&*()_+"
    }
    for (let i = 0; i < lenght; i++) {
      password += string.charAt(Math.floor(Math.random() * string.length))
    }

    setPassword(password)

  },[lenght,numberAllowed,charAllowed])

  useEffect(() =>{

    generatePassword()

  }, [lenght,numberAllowed,charAllowed])


  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    setCopyTxt('copied')
    setTimeout(() => {
      setCopyTxt('Copy')
    }, 2000);

    pswdref.current.select()
  }

  return (
    <>
      <div className=' w-full max-w-md mx-auto - shadow-md- rounded-lg px-4 py-3 my-8 border text-white'>
        <h1 className='text-bold text-2xl text-center ' >Password Generator</h1>
        <div className=' flex gap-3 my-2'>
          <input type="text" placeholder={password} value=  {password} id='pswdInput' ref={pswdref}
          className=' rounded-lg shadow-md w-full py-1 px-3 outline-none text-stone-500'
          />
          <button onClick={copyToClipboard} className=' text-white duration-200 bg-blue-500 py-1 px-2 rounded-full hover:bg-purple-600 btn' >{copyTxt}</button>
        </div>

        <div className=' flex gap-2 max-w-md'>
          <div className=' flex items-center gap-x-1'>
            <input type="range" id='length' name='length'
            min={8}
            max={100}
            value={lenght}
            className=' cursor-pointer'
            onChange={(e) =>setLenght(e.target.value)}
            readOnly
            />
            <label htmlFor="length">Length: {lenght}</label>
          </div>

          <div className=' flex items-center gap-x-1'>
              <input type="checkbox"  name='numbers' id='numbers'
              defaultChecked={numberAllowed}
              onChange={() =>{
                setNumberAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="numbers">Numbers</label>
          </div>

          <div className=' flex items-center gap-x-1'>
              <input type="checkbox" name='characters' id='characters' 
              defaultChecked={charAllowed}
              onChange={() =>{
                setCharAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="characters">Characters</label>
          </div>

        </div>
    
      </div>
    </>
  )
}

export default App

/*
  ** Coded By Kill_m0nger27 **
*/