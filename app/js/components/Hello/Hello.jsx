import React from "react";

const { string } = React.PropTypes;

export default React.createClass({

    propTypes: {
        name: string
    },

    render(){
        const { name } = this.props;

        return (
            <div className="hello">
                Hello, <span className="hello__name">{name}!</span>
            </div>
        );
    }
});
