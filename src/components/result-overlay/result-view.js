import React from "react";
import './result-view.css';
import LongestTrend from './longest-trend';
import HighestVolume from './highest-volume';
import ProfitMachine from './profit-machine';


const ResultView = ({ onToggleResultView, longestTrend, highestVolume, timeMachine }) => {

  return (
    <div className="result-container">
      <div className="result-dialog">
        {longestTrend && <LongestTrend longestTrend={longestTrend} />}
        {highestVolume && <HighestVolume highestVolume={highestVolume} />}
        {timeMachine && <ProfitMachine timeMachine={timeMachine} />}
        <div className="close-button" onClick={onToggleResultView}>
          Close
        </div>
      </div>
    </div>
  );
}

export default ResultView;