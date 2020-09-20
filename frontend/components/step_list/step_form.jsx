import { uniqueId } from '../../util/id_generator';
import React from 'react';

export default class StepForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false,
            todo_id: this.props.todo_id
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
        return e => this.setState({[property]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const step = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveStep(step);
        this.setState({
            title: "",
            body: ""
        });
    }

    render() {
        return (
            <form className="step-form" onSubmit={ this.handleSubmit }>
                <label>Title:
                    <input
                        className="input"
                        ref="title"
                        value={ this.state.title }
                        placeholder="get a soap"
                        onChange={ this.update('title') }
                        required />
                </label>
                <label>Description:
                    <input
                        className="input"
                        ref="body"
                        value={ this.state.body }
                        placeholder="google soap store"
                        onChange={ this.update('body') }
                        required />
                </label>
                <button className="create-button">Create Step!</button>
            </form>
        );
    }
}