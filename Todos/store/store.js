const { createStore, applyMiddleware, combineReducers, compose } = Redux
const thunk = ReduxThunk.default

import { todoReducer } from './todo.reducer.js'
import { userReducer } from './user.reducer.js'

const rootReducer = combineReducers({
    todoModule : todoReducer,
    userModule : userReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


