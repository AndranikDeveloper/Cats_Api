import { applyMiddleware, combineReducers, createStore } from "redux";
import catsReducer from './reducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    catsReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))

export default store