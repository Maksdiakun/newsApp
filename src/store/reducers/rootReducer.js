import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import sortReducer from './sortReducer';
import searchReducer from './searchReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    news: newsReducer,
    sortBy: sortReducer,
    search: searchReducer,
    user: userReducer
});


export default rootReducer;