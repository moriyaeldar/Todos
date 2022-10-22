const initialState = {
    todos: [],
    filterBy: 'All'
}
export function todoReducer(state = initialState, action) {
    var newState = state
    var todos;
    
    switch (action.type) {
       
            case "SET_TODOS":
              newState = { ...state, todos: action.todos };
              break;
            case "REMOVE_TODO":
              todos = state.todos.filter((todo) => todo.id !== action.todoId);
              newState = { ...state, todos: todos };
              break;
            case "ADD_TODO":
              newState = { ...state, todos: [...state.todos, action.todo] };
              break;
            case "UPDATE_TODO":
              todos = state.todos.map((todo) =>
                todo.id === action.todo.id ? action.todo : todo
              );        
              newState = { ...state, todos: todos };
              break;
              case 'CHANGE_FILTER':
                newState = {...state, filterBy: action.newFilterBy }
                console.log('newState:',newState);
                break;
    }
    window.todoState = newState
    
    return newState

}
