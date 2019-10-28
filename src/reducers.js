import { combineReducers } from 'redux'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
    items: todoReducer
})

export default rootReducer