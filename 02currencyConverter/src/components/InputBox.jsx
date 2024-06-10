import React from 'react'

const InputBox = ({
    label = 'to',
    amount,
    onAmountChange,
    selectedcurrency,
    onCurrencyChange,
    amountDisabled = false,
    currencyDisabled = false,
    options }) => {

  return (

    <div className=' w-full rounded-lg bg-transparent shadow-lg  flex items-center justify-between '>

        <div className='flex flex-wrap justify-start flex-col p-3'>

            <label className='mb-1 text-white text-xl'>{label}</label>
            <input 
            type='number' 
            value={amount} 
            placeholder='Amount' 
            className='rounded-lg outline-none text-xl pl-2' 
            disabled={amountDisabled}
            onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}}
             />

        </div>

        <div className='flex flex-wrap justify-end flex-col p-3'>

            <label className=' mb-1 text-white text-xl' >Currency Type</label>
            <select 
            value={selectedcurrency} 
            className='rounded-lg outline-none text-xl pl-2' 
            disabled={currencyDisabled}
            onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)} }
            >
                {options.map((option) => (<option value={option}> {option} </option>))}

            </select>

        </div>

    </div>
  )
}

export default InputBox