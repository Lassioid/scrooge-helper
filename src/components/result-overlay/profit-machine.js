import React from 'react';
import { toDateString } from '../../utility/functions';

const ProfitMachine = ({ timeMachine }) => {
  const { title } = timeMachine;
  const { id, buyDate, sellDate, days } = timeMachine.data.duration;
  return (
    <div className="result-dialog-content">
    <h3 className="result-title">{title}</h3>
    <p className="result-text">
      Longest uptrend with the given date range for<b> {id} </b>
      lasted for <b> {days} </b>days and the price went up from 
      <b> {buyDate[1].toFixed(3)} </b> to <b> {sellDate[1].toFixed(3)} </b>. 
      Gyro's Time machine indicates, that Scrooge should have purchased <b>{id} </b>
      in the beginning of the trend which was<b> {toDateString(buyDate[0])} </b> 
      and sold them at their peak which was<b>  {toDateString(sellDate[0])} </b>
    </p>
  </div>
  );
};

export default ProfitMachine;