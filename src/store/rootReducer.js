import { combineReducers } from 'redux';
import { hotels } from './reducers/hotels.reducer'
const rootReducer = combineReducers({
hotels,
});

export default rootReducer;
