import React from 'react';
import styled from 'styled-components';

const Todo = styled.div`
    background: ${ props => props.completed ? '#6f6' : '#f66' };
    border: solid 1px black;
    width: calc(100% - 2rem);
    padding: 1rem;
    margin-bottom: 1rem;
`;

export default Todo;