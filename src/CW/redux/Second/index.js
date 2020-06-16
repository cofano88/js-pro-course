import { SecondComponent } from "./Second";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch({ type: "INCREMENT" });
  },
  decrement: () => {
    dispatch({ type: "DECREMENT" });
  },
  stateInp: (value) => {
    dispatch({ type: "stateInp", value });
  },
});

export const Second = connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondComponent);
