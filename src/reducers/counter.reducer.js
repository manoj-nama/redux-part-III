const initialState = { counter: 0 };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCR": {
      return { counter: state.counter + 1 }
    }
    case "DECR": {
      return { counter: state.counter - 1 }
    }
    case "DOUBLE": {
      return { counter: state.counter * 2 }
    }
    default: {
      return state
    }
  }
}

export default counterReducer;