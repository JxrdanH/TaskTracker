import React from 'react';
import '../styles/Todo.css';
import TrashIcon from '../Images/trash.ico';

function Todo({ todo, todos, setTodos }){
    function remove(id) {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    function handleChange(id){
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        //todo.complete = !todo.complete;
        //setCompletedTodos(newTodos)
    }

    return (
        <div className="Todo">
            <input type="checkbox" className="checkbox" checked={ todo.complete } onChange={ () => handleChange(todo.id) } />
            <h3 className="todo-title">{ todo.name }</h3>
            <img src={ TrashIcon } alt="Trash Icon" className="trash-icon" onClick={ () => remove(todo.id) } height="17px" />
            <p>Date</p>
        </div>
    )
}

export default Todo
