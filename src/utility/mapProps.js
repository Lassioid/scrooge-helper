export const mapStateToProps = state => ({ ...state });



export const mapDispatchToProps = dispatch => ({
  onSetCurrencies: currencies => dispatch({
    type: "set_currencies_to_state",
    payload: currencies
  }),

  onSelectCurrency: currency => dispatch({
    type: "set_currency_to_state",
    payload: currency
  }),

  onToggleResultView: () => dispatch({
    type: "toggle_result_view"
  }),

  onLongestDownTrend: downtrend => dispatch({
    type: "set_longest_trend_to_state",
    payload: downtrend
  }),

  onHighestVolume: volume => dispatch({
    type: "set_highest_volume_to_state",
    payload: volume
  }),

  onTimeMachine: uptrend =>  dispatch({
    type: "set_time_machine_data_to_state",
    payload: uptrend
  })
});