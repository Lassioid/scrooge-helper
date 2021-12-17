import React from "react";
import './result-buttons.css';


const ResultButtons = ({ isDisabled, getDownTrend, getHighestVolume, getTimeMachineResults }) => (
  <div className="result-buttons">
    <button className="result-button" disabled={isDisabled} onClick={getDownTrend}>
      Get Longest Downward Trend
    </button>
    <button className="result-button" disabled={isDisabled} onClick={getHighestVolume}>
      Get Highest Trading Volume
    </button>
    <button className="result-button" disabled={isDisabled} onClick={getTimeMachineResults}>
      Should Scrooge Invest?
    </button>
  </div>
);


export default ResultButtons;