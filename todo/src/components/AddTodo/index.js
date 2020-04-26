import React, { useState } from 'react';

const AddTodo = props => {
    
    const [task, setTask] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        props.dispatch({type:'ADD', payload: task});
        setTask('');
    }

    const handleClear = event => {
        event.preventDefault();
        props.dispatch({type:'CLEAR'});
    }

    return (
        <form
            onSubmit={event => handleSubmit(event)}
        >
            <input 
                name="task" 
                id="task"
                type="text"
                value={task}
                onChange={event => setTask(event.target.value)}
            />
            <button type="submit">Add</button>
            <button 
                onClick={event => handleClear(event)}
            >Clear</button>
        </form>
    );

}

export default AddTodo;