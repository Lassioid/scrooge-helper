import React from 'react';
import { toDateString } from '../../utility/functions';

const HighestVolume = ({ highestVolume }) => {
  const { title } = highestVolume;
  const { id, day, amount } = highestVolume.data.duration;
  return (
    <div className="result-dialog-content">
      <h3 className="result-title">{title}</h3>
      <p className="result-text">
        In <b>{id}</b>'s historical data from CoinGecko, the date with a highest trading volume was 
        <b> {toDateString(day)} </b> and the trade volume was<b> {amount.toFixed(4)} </b>
      </p>
    </div>
  );
};

export default HighestVolume;