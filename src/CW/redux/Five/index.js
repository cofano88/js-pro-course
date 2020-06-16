
});

const mapDispatchToProps = (dispatch) => ({
  increment_8: () => {
    dispatch({ type: "INCREMENT_8" });
  },import { FiveComponent } from "./Five";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counter: state.five.counter,
  mult_8: () => {
    dispatch({ type: "MULT_8" });
  },
});

export const Five = connect(mapStateToProps, mapDispatchToProps)(FiveComponent);
