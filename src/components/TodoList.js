import React from 'react';
import Todo from './Todo';
import '../styles/TodoList.css';

function TodoList({ todos, setTodos, completedTodos, setCompletedTodos }) {

    return (
        <div className="TodoList">
            <div className="uncompleted-todos">
                <h2 className="tasks-header">Current Tasks</h2>
                { todos.map(todo => <Todo key={ todo.id } todo={ todo } todos={ todos } setTodos={ setTodos } />) }
                <button onClick={ () => setTodos([]) } className="clear-btn">Clear Current Todos</button>
            </div>
            <hr></hr>
            <div className="completed-todos">
                <h2 className="tasks-header">Completed Tasks</h2>
                { completedTodos.map(todo => <Todo key={ todo.id } todo={ todo } todos={ todos } setTodos={ setTodos } setCompletedTodos={ setCompletedTodos } />) }
                <button onClick={ () => setCompletedTodos([]) } className="clear-btn">Clear Completed Todos</button>
            </div>
        </div>
    )
}

export default TodoList