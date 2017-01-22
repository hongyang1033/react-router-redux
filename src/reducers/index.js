import { combineReducers } from 'redux';
import DataReducer from './reducer_data';
import SearchReducer from './reducer_search';
import updateSearch from './reducer_updateSearch';

const rootReducer = combineReducers({
    data: DataReducer,
    search: SearchReducer,
    term: updateSearch
});

export default rootReducer;
