const initialState = { counter: 11 };

export const five = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_8":
      return { ...state, counter: state.counter + 8 };
    case "MULT_8":
      return { ...state, counter: state.counter * 8 };
    default:
      return state;
  }
};
