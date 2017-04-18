import React from "react";

import { string } from "prop-types";

export default class Hello extends React.Component {

    static propTypes = {
        name: string
    }

    render = () => {
        const { name } = this.props;

        return (
            <div className="hello">
                Hello, <span className="hello__name">{name}!</span>
            </div>
        );
    }
}
