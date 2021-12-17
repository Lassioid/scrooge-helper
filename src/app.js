import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./utility/mapProps";
import CoinsContainer from "./components/coins-container/coins-container";
import DateForm from "./components/date-form/date-form";
import ResultView from "./components/result-overlay/result-view";


const App = state => (
  <div className="app">
    <CoinsContainer {...state} />
    <DateForm {...state} />
    {state.result_view.visible && <ResultView {...state} />}
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
