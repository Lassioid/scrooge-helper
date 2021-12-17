import React from "react";
import "./date-select.css";
import { range } from "../../utility/functions";



const DateOption = ({ value, selectOption }) => (
  <div onClick={() => selectOption(value)} className="form-option">
    {value}
  </div>
);

const DateSelect = ({ field, values, selectOption, toggleOptions }) => (
  <div onClick={() => toggleOptions()} className="form-input">
    <h3 className="form-option">
      {field.value ? field.value : field.defaultValue}
    </h3>
    {field.active && (
      <div onMouseLeave={() => toggleOptions()} className="form-options">
        {values.map((value, idx) => (
          <DateOption key={idx} value={value} selectOption={selectOption} />
        ))}
      </div>
    )}
  </div>
);

const DateFormField = ({ title, state, selectOption, toggleOptions }) => (
  <div className="form-field">
    <h3 className="form-title">{title}</h3>
    <div className="form-inputs">
      <DateSelect
        field={state.year}
        values={range(1970, 2021).reverse()}
        selectOption={selectOption("year")}
        toggleOptions={toggleOptions("year")}
      />
      <DateSelect
        field={state.month}
        values={range(1, 12)}
        selectOption={selectOption("month")}
        toggleOptions={toggleOptions("month")}
      />
      <DateSelect
        field={state.day}
        values={range(1, 31)}
        selectOption={selectOption("day")}
        toggleOptions={toggleOptions("day")}
      />
      *
    </div>
  </div>
);

export default DateFormField;
