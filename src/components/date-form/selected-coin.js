import React, { useEffect } from "react";
import "./selected-coin.css";


const SelectedCurrency = ({ currency }) => {
  const backgroundImage = { backgroundImage: `url(${currency.image.small})` };

  return (
    <div className="selected_currency">
      <div className="selected_currency_image" style={backgroundImage} />
      <h3 className="selected_currency_name">{currency.name}</h3>
    </div>
  );
};

export default SelectedCurrency;
