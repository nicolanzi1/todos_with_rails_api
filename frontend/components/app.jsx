import React from 'react';
import TodoListContainer from './todos/todo_list_container';

const App = () => (
    <div className="app">
        <h1>My Cool Todos App</h1>
        <TodoListContainer />
    </div>
);

export default App;