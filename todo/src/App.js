import React, { useReducer } from 'react';

import { initialState, reducer } from './reducers/reducer';

import TodoList from './components/TodoList';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoList>
      {state.todos.map(todo => (
        <Todo
          completed={todo.completed}
          onClick={ event => dispatch({
            type: 'TOGGLE',
            payload: todo.id
          })}
        >
          {todo.item}
        </Todo>
      ))}
      <AddTodo dispatch={dispatch} />
    </TodoList>
  );
}

export default App;
