import React from "react";
import { number } from "prop-types";


// Counter is a stateful component
// https://reactjs.org/docs/state-and-lifecycle.html
export default class Counter extends React.Component {

  // the "class properties" babel transform allows us to write this syntax
  static propTypes = {
    initialCount: number
  }

  static defaultProps = {
    initialCount: 0
  }

  // the babel transform also allows us to declare the intial state like this
  state = {
    count: this.props.initialCount
  }

  // always use es6 arrow functions to declare class methods to ensure "this"
  // is predictable
  // see https://reactjs.org/docs/react-without-es6.html#autobinding
  // to see why, try using the following instead:
  // handleClick() {
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render = () => {

    // es6 destructuring
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { count } = this.state;

    return (
      <div className="counter">
        <div className="counter__button">
          <button type="button" onClick={this.handleClick}>+1</button>
        </div>
        <div className="counter__text">
          The button was clicked <span className="counter__number">{count}</span> times.
        </div>
      </div>
    );
  }
}
