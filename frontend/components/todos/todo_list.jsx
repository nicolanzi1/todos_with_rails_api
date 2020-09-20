import React from 'react';
import TodoForm from '../todo_list/todo_form';
import TodoListItem from '../todo_list/todo_list_item';

export default class TodoList extends React.Component {
    componentDidMount() {
        this.props.requestTodos();
    }
    
    render() {
        const { todos, createTodo, receiveTodo, errors } = this.props;
        const todoItems = todos.map(todo => (
            <TodoListItem
                key={`todo-list-items${todo.id}`}
                todo={todo}
                receiveTodo={ receiveTodo } />
        ));

        return (
            <div>
                <TodoForm createTodo={  createTodo } errors={ errors }/>
                <ul className="todo-list">
                    { todoItems }
                </ul>
                <TodoForm receiveTodo={ receiveTodo } />
            </div>
        );
    }
}