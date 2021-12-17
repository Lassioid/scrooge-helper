import React from "react";
import "./coins-list.css";

const CurrencyItem = ({ currency, onSelectCurrency }) => {  
  const backgroundImage = { backgroundImage: `url(${currency.image.small}` };

  return (
    <div onClick={onSelectCurrency} className="currency_item">
      <div style={backgroundImage} className="currency_image"/>
      <h3 className="currency_text">{currency.symbol}</h3>
    </div>
  );
};



const CurrencyList = ({ currencies, onSelectCurrency }) => (
  <div className="currency_list">
    {currencies.map((currency, idx) => (
      <CurrencyItem key={idx} currency={currency} onSelectCurrency={() => onSelectCurrency(currency)} />
    ))}
  </div>
);

export default CurrencyList;
