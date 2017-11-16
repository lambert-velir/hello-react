import React from "react";

import { string } from "prop-types";

const propTypes = {
  name: string
};

const defaultProps = {
  name: "mike"
};

const Hello = (props) => {
  const { name } = props;

  return (
    <div className="hello">
      Hello, <span className="hello__name">{name}!</span>
    </div>
  );
};

Hello.propTypes = propTypes;

Hello.defaultProps = defaultProps;

export default Hello;
