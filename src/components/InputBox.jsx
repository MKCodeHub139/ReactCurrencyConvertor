import React from "react";
import "./InputBox.css";
const InputBox = ({
  label,
  placeholder,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
}) => {
  return (
    <div className="card w-full flex justify-center items-center">
      <div className="h-[20vh] flex justify-between items-center w-full bg-[#577962] text-white rounded px-3">
        <div className="label flex flex-col gap-4">
          <label htmlFor="">{label}</label>
          <input className="bg-white text-black text-[15px] px-3 rounded" placeholder={placeholder}
            type="number"
            name=""
            id=""
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="choose-country flex flex-col gap-4">
          <label htmlFor="">currency type</label>
          <select
            name=""
            id=""
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            className="bg-white text-black"
          >
            {currencyOptions.map((currency)=>{
                return <option  value={currency} key={currency}>{currency}</option>
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
