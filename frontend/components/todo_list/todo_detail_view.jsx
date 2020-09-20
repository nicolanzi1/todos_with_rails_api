import React from 'react';
import StepList from '../step_list/step_list';

import StepListContainer from '../step_list/step_list_container';

export default class TodoDetailView extends React.Component {
    render() {
        const { todo, removeTodo } = this.props;
        return (
            <div>
                <p className="todo-body">{todo.body}</p>
                <StepListContainer todo_id={ todo.id } />
                <button
                className="delete-button"
                onClick={ removeTodo }>Delete Todo</button>
            </div>
        );
    }
}