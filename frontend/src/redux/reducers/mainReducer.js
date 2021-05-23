import { combineReducers } from "redux";
import citiesReducer from './citiesReducer'
import itinerarioReducer from './itinerarioReducer'
import usersReducer from './usersReducers'

const mainReducer = combineReducers({
    citiesReducer,
    itinerarioReducer,
    usersReducer
})

export default mainReducer