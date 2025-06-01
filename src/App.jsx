import { useState } from 'react'
import './App.css'
import InputBox from './components'
import useCurrencyInfo from './hooks/api'

function App() {
  const[from,setFrom] =useState('usd')
  const[to,setTo] =useState('inr')
  const[amount,setAmount] =useState()
  const[convertedAmount,setConvertedAmount] =useState()
  
  
  const currencyInfo =useCurrencyInfo(from)
  const options =Object.keys(currencyInfo)

  const swap =(e)=>{
e.preventDefault()
    setTo(from)
    setFrom(to)
  }
  const convert =()=>{
    setConvertedAmount(amount *currencyInfo[to])
  }
  return (
   <>
   <div className="main bg-black h-[100vh] w-[100vw] p-9">
   <h2 className='text-white text-4xl mb-5'>Currency Convertor</h2>
   <div className="cards bg-[#212423] p-5 rounded-xl flex flex-col items-center justify-center gap-4 relative w-[45%]
   ">
    <InputBox label="from" amount ={amount} currencyOptions={options} onCurrencyChange={(value)=>setFrom(value)} selectCurrency={from} onAmountChange={(value)=>setAmount(value)} placeholder="Enter amount"/>

    <div className="swap h-9 w-22 bg-amber-200 hover:bg-amber-100 absolute left-[40%] top-[38%] rounded flex items-center justify-center cursor-pointer" onClick={swap}>
      swap

    </div>
    <InputBox label ="to" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(value)=>setTo(value)} selectCurrency={to} placeholder="converted amount "/> 

    <button className='bg-amber-200 hover:bg-amber-100 w-full rounded py-1 cursor-pointer' onClick={convert}>{from.toUpperCase()} to {to.toUpperCase()}</button>
   </div>


   </div>
   </>
  )
}

export default App
