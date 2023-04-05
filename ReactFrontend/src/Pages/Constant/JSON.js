import React, { Component } from "react";

import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.css";

export default class JSONEditorDemo extends Component {
    componentDidMount() {
        const options = {
        mode: "code",
        theme: "ace/theme/jsoneditor",
        onChangeJSON: this.props.onChangeJSON,
        onValidate: function(json) {
            console.log(json);
            const errors = [];

            return errors;
        }
        };

        this.jsoneditor = new JSONEditor(this.container, options);
        this.jsoneditor.set(this.props.json);
        this.jsoneditor.aceEditor.setTheme("ace/theme/twilight");
    }

    componentWillUnmount() {
        if (this.jsoneditor) {
        this.jsoneditor.destroy();
        }
    }

    componentDidUpdate() {
        this.jsoneditor.update(this.props.json);
    }

    render() {
        return (
        <div
            className="jsoneditor-react-container"
            ref={elem => (this.container = elem)}
        />
        );
    }
}
