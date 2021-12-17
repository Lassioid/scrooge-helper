import React from 'react';
import { toDateString } from '../../utility/functions';

const LongestTrend = ({ longestTrend }) => {
  const { title } = longestTrend;
  const { id, days, start, end } = longestTrend.data.duration;

  return (
    <div className="result-dialog-content">
      <h3 className="result-title">{title}</h3>
      <p className="result-text">
        In <b>{id}</b>'s historical data from CoinGecko, the price decreased<b> {days} </b> 
        days in a row for the inputs from <b> {toDateString(start[0])} </b> 
        and to <b> {toDateString(end[0])} </b>
      </p>
    </div>
  );
};

export default LongestTrend;