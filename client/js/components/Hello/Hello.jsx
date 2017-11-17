import React from "react";
import { string } from "prop-types";

// propTypes and defaultProps will get attached to Hello at the bottom of the file
// It is nice defining these at the top of the file so you know what props this
// component accpets right when you open the file.
const propTypes = {
  name: string
};

const defaultProps = {
  name: "mike"
};


// Hello is a stateless functional component.
// This component has no state, and doesn't depend on any lifecycle hooks
// https://reactjs.org/docs/components-and-props.html
const Hello = (props) => {

  // es6 destructuring
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { name } = props;

  return (
    <div className="hello">
      Hello, <span className="hello__name">{name}!</span>
    </div>
  );
};

Hello.propTypes = propTypes; // defined at the top of the file

Hello.defaultProps = defaultProps;

export default Hello;
