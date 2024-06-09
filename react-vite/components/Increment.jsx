import React from 'react'
import { useState } from 'react'

const Increment = () => {
    //let counter = 5
    const[counter,setCounter] = useState(10)


    const increment = () => {
        setCounter(counter + 1) 
        console.log(counter)

    }

    const decrement = () => {
        setCounter(counter - 1)
        console.log(counter)
    }

    return(
    <>  
        <div className="bg-slate-300 rounded-lg ">
            <h1 className='text-4xl text-purple-600 '>{counter}</h1>
            <button className=" mr-2 my-2 px-4 py-1 bg-white text-sm text-black font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={increment}>Increment</button>
            <button className=" ml-2 my-2 px-4 py-1 bg-white text-sm text-black font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={decrement}>Decrement</button>
        </div>
        
    </>
    )

}

export default Increment