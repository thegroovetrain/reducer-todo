export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: '??????',
            completed: false,
            id: 3425634664
        },
        {
            item: 'Profit!',
            completed: false,
            id: 5436849543
        },
        {
            item: 'Summon C\'thulu',
            completed: false,
            id: 6666666666
        },
    ]
};

const addTask = task => {
    return {
        item: task,
        completed: false,
        id: Date.now()
    }
}

export const reducer = (state, action) => {

    switch (action.type) {

        case 'ADD':
            return { todos: [...state.todos, addTask(action.payload)]};

        case 'TOGGLE':
            return {todos: state.todos.map(a => {
                return {
                    item: a.item,
                    id: a.id,
                    completed: a.id === action.payload ? !a.completed : a.completed
                }
            })};
        
        default:
            return state;

    }

}