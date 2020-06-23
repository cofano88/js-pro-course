const initialState = { counter: 0 };

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "stateInp":
      return { ...state, counter: state.counter + action.value };
    default:
      return state;
  }
};
