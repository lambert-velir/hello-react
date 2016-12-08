import React from "react";
import Hello from "./Hello/Hello.jsx";

export default React.createClass({

    getInitialState() {
        return {

        };
    },


    render() {

        return (
            <div>
                <Hello name={"React"} />
                <Hello name={"Velir"} />
            </div>
        );
    }
});
