import React, { useReducer } from 'react';

import { initialState, reducer } from '../../reducer';

import Block from './Block';

//import Todo from '../Todo';

const TodoList = () => {
    
    const [todos, dispatch] = useReducer(reducer, initialState);

    return (
        <TodoList.Block>

        </TodoList.Block>
    )

}

TodoList.Block = Block;

export default TodoList;