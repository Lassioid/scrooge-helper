const initialState = {
  result_view: {
    visible: false,
  }
};



const reducer = (state, action) => {
  switch (action.type) {

    case "set_currencies_to_state":
      return {
        ...state,
        currencies: action.payload,
      };

    case "set_currency_to_state":
      return {
        ...state,
        selected_currency: action.payload,
      };

    case "set_longest_trend_to_state":
      return {
        ...state,
        longestTrend: {
          title: "Longest Downward Trend",
          data: action.payload
        }
      }

    case "set_highest_volume_to_state":
      return {
        ...state,
        highestVolume: {
          title: "Highest Trading Volume",
          data: action.payload
        }
      }

    case "set_time_machine_data_to_state": 
      return {
        ...state,
        timeMachine: {
          title: "Time Machine Utility",
          data: action.payload
      }
    }

    case "toggle_result_view":
      return state.result_view.visible === true
       ? ({
         currencies: state.currencies,
         selected_currency: state.selected_currency,
         result_view: {
          visible: false
         }
        })
      : ({
        ...state,
        result_view: {
          visible: true
        }
      })

    default:
      return state;
  }
};

export { initialState, reducer };
