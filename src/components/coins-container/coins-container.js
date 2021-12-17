import React, { useEffect } from "react";
import { getCoins, getCoin } from "../../utility/requests";
import CurrencyList from "../coins-list/coins-list";
import "./coins-container.css";

const CoinsContainer = ({ onSetCurrencies, onSelectCurrency, currencies }) => {

  useEffect(() => {
    getCoins().then((coins) => onSetCurrencies(coins));
    getCoin("bitcoin").then((coin) => onSelectCurrency(coin));
  }, []);

  return (
    <div className="currency_interface">
      {currencies && (
        <CurrencyList currencies={currencies} onSelectCurrency={onSelectCurrency} />
      )}
    </div>
  );
};

export default CoinsContainer;
