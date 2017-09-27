import React from "react";
import Hello from "./Hello/Hello.jsx";

export default class App extends React.Component {

    state = {

    };

    render = () => {

        return (
            <div>
                <Hello name={"React"} />
                <Hello name={"Velir"} />
            </div>
        );
    }
}
