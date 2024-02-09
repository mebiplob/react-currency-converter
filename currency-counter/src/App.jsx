import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'


function App() {
  const [amount, setAmount] = useState(1)
  const [convertFrom, setConvertFrom] = useState('usd')
  const [convertTo, setConvertTo] = useState('bdt')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyList =  useCurrencyInfo(convertFrom)
  const currencyKeys = Object.keys(currencyList)


  const convert = () => {
    console.log(setConvertedAmount( amount * currencyList[convertTo]))

  }

  //const convert = setConvertedAmount( amount * currencyList[convertTo])


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/14751274/pexels-photo-14751274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="Convert From" 
                            amount={amount}
                            currencyOptions = {currencyKeys}
                            onAmountChange={(amount) => setAmount(amount)}
                            onCurrencyChange={(convertFrom) => setConvertFrom(convertFrom)}
                            selectCurrency={convertFrom}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="Converted To"
                            amount={convertedAmount}
                            currencyOptions = {currencyKeys}
                            onAmountChange={(amount) => setAmount(amount)}
                            onCurrencyChange={(convertTo) => setConvertTo(convertTo)}
                            selectCurrency={convertTo}
                        />
                    </div>
                    <button  type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
