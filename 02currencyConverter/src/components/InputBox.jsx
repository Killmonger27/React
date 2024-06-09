import React from 'react'

const InputBox = ({
    label = 'to',
    amount = 0,
    onAmountChange,
    selectedcurrency,
    onCurrencyChange,
    amountDisabled = false,
    currencyDisabled = false,
    options = [],
}) => {


  return (

    <div className=' w-1/3 rounded-lg bg-slate-400 shadow-lg  flex items-center justify-between '>

        <div className='flex flex-wrap justify-start flex-col p-3'>
            <label className='mb-1 '>{label}</label>
            <input 
            type='number' 
            value={amount} 
            placeholder='Amount' 
            className='rounded-lg outline-none' 
            disabled={amountDisabled}
            onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}}
             />
        </div>

        <div className='flex flex-wrap justify-end flex-col p-3'>
            <label className=' mb-1'>Currency Type</label>

            <select 
            value={selectedcurrency} 
            className='rounded-lg outline-none' 
            disabled={currencyDisabled}
            onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)} }
            >
                {options.map((option) => (`<option value= ${option}>${option}</option>`))}
            </select>

        </div>

    </div>
  )
}

export default InputBox