import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/AddTodo.css';

function AddTodo({ todos, setTodos }) {
    const textInputRef = useRef();

    function todoSubmit(e){
        const name = textInputRef.current.value;
        if (name !== ''){
            setTodos(prevTodos => { return [...prevTodos, { id: uuidv4(), name: name, complete: false }] });
            e.preventDefault();
            textInputRef.current.value = null;
        }
        else {
            e.preventDefault();
        }
    }

    return (
        <div>
            <form className="todo-form" onSubmit={ todoSubmit }>
                <input type="text" className="input-textbox" placeholder="Add a task..." ref={textInputRef}></input>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo
