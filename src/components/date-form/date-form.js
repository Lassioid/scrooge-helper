import React, { useEffect, useState } from "react";
import DateFormField from "./date-select";
import SelectedCurrency from "./selected-coin";
import ResultButtons from "./result-buttons";
import { getDaysPrices } from "../../utility/requests";
import { toLongestDownTrend, toLongestUpTrend, toHighestTradingVolume, createDate } from "../../utility/functions";
import "./date-form.css";

const DateForm = ({ 
  onToggleResultView, 
  onLongestDownTrend, 
  onHighestVolume, 
  onTimeMachine,
  selected_currency 
}) => {

  const [formState, setState] = useState({
    startDate: {
      year: { 
        value: "", 
        active: false, 
        defaultValue: "year" 
      },
      month: { 
        value: "", 
        active: false, 
        defaultValue: "month" 
      },
      day: { 
        value: "", 
        active: false, 
        defaultValue: "day" 
      },
    },
    endDate: {
      year: { 
        value: "", 
        active: false, 
        defaultValue: "year" 
      },
      month: { 
        value: "", 
        active: false, 
        defaultValue: "month" 
      },
      day: { 
        value: "", 
        active: false, 
        defaultValue: "day" 
      },
    },
  });

  const { startDate, endDate } = formState;

  const selectValue = (field) => (key) => (value) =>
    setState((_formState) => ({
      ..._formState,
      [field]: {
        ..._formState[field],
        [key]: {
          ..._formState[field][key],
          value: value,
        },
      },
    }));

  const toggleOptions = (field) => (key) => () =>
    setState((state) => ({
      ...state,
      [field]: {
        ...state[field],
        [key]: {
          ...state[field][key],
          active: !state[field][key].active,
        },
      },
    }));

  const isDisabled = (
    startDate.year.value &&
    startDate.month.value &&
    startDate.day.value &&
    endDate.year.value &&
    endDate.month.value &&
    endDate.day.value &&
    selected_currency
    ? false
    : true
  );

  const getLongestDownTrend = () => {
    const id = selected_currency.id;
    const start = createDate(startDate.year.value, startDate.month.value, startDate.day.value);
    const end = createDate(endDate.year.value, endDate.month.value, endDate.day.value);

    getDaysPrices(id, start, end).then((daysPrices) => {
      const downtrend = toLongestDownTrend(daysPrices);

      onLongestDownTrend({
        duration: {
          id: id,
          start: downtrend[0],
          end: downtrend[downtrend.length - 1],
          days: downtrend.length,
        }
      })

      onToggleResultView();
    });
  };

  const getHighestTradingVolume = () => {
    const id = selected_currency.id;
    const start = createDate(startDate.year.value, startDate.month.value, startDate.day.value);
    const end = createDate(endDate.year.value, endDate.month.value, endDate.day.value);
    
    getDaysPrices(id, start, end).then(x => {
      const tradingVolume = toHighestTradingVolume(x);

      onHighestVolume({
        duration: {
          id: id,
          day: tradingVolume[0],
          amount: tradingVolume[1]
        },
      });

      onToggleResultView();

    });
  };

  const getTimeMachineResults = () => {
    const id = selected_currency.id;
    const start = createDate(startDate.year.value, startDate.month.value, startDate.day.value);
    const end = createDate(endDate.year.value, endDate.month.value, endDate.day.value);
    
    getDaysPrices(id, start, end).then(x => {
      const longest = toLongestUpTrend(x);
      
      onTimeMachine({
        duration: {
          id: id,
          buyDate: longest[0],
          sellDate: longest[longest.length-1],
          days: longest.length 
        }
      })

      onToggleResultView();

    });
  };

  return (
    <div className="form-container">
      {selected_currency && (
        <SelectedCurrency
          currency={selected_currency}
        />
      )}
      <DateFormField
        title="Start Date"
        state={formState.startDate}
        selectOption={selectValue("startDate")}
        toggleOptions={toggleOptions("startDate")}
      />
      <DateFormField
        title="End Date"
        state={formState.endDate}
        selectOption={selectValue("endDate")}
        toggleOptions={toggleOptions("endDate")}
      />
      <ResultButtons
        getDownTrend={getLongestDownTrend}
        getHighestVolume={getHighestTradingVolume}
        getTimeMachineResults={getTimeMachineResults}
        isDisabled={isDisabled}
      />
    </div>
  );
};

export default DateForm;
