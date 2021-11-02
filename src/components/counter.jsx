import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions"

function Counter(props) {
  const { counter } = props.counter;
  return (
    <div>
      <button type="button" onClick={props.decrement}>DEC</button>
      <span>{counter}</span>
      <button type="button" onClick={props.increment}>INCR</button>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
})
const mapDispatchToProps = {
  increment,
  decrement
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer