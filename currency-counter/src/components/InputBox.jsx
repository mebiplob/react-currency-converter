import React from 'react';


function InputBox({
    label,
    amount,
    onAmountChange,
    selectCurrency,
    currencyOptions = [],
    onCurrencyChange,
    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5 text-black"
                    type="number"
                    placeholder="Amount"
                    amount = {amount}
                    value={amount}
                    onChange={() => (onAmountChange)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-blue-600 cursor-pointer outline-none"
                    selectCurrency= {currency}
                >
                    
                        <option value="usd">
                            usd
                        </option>
                
                </select>
            </div>
        </div>
    );
}

export default InputBox